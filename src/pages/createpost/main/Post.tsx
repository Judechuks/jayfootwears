import React, { useEffect, useState } from 'react'
import {Post as IPost} from './Main'
import { collection, getDocs, deleteDoc, addDoc, query, where, doc} from "firebase/firestore";
import {auth, db} from '../../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

// To get data as props from the 'Main.tsx' file, use 'interface'
interface Props {
  post: IPost;
}

interface Like {
  likeId: string;
  userId: string;
}

export const Post = (props: Props) => {
  const {post} = props;
  const [user] = useAuthState(auth);

  const [likes, setLikes] = useState<Like[] | null>(null)

  // Like Reference from firebase database (chuksjude7 account)
  const likesRef = collection(db, "likes")  // likes  is collection name from firebase

  const likesDoc = query(likesRef, where("postId", "==", post.id))

  const getLikes = async () => {
    const data = await getDocs(likesDoc)
    setLikes(data.docs.map((doc) => ({userId: doc.data().userId, likeId: doc.id})));
  }
  useEffect(() => {
    getLikes()
  }, []); // [] means when the component is mounting and not updating
 
  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {userId: user?.uid, postId: post.id})
      if (user){
        setLikes((prev) => 
          prev 
          ? [...prev, {userId: user.uid, likeId: newDoc.id}] 
          : [{userId: user.uid, likeId: newDoc.id}]
        );
      }
    } catch (err) {
      console.log(err);
    }
  }
 
  const removeLike = async () => {
    try {
      const likeToDeleteQuery = query(
      likesRef, 
      where("postId", "==", post.id),
      where("userId", "==", user?.uid)
      );

      const likeToDeleteData = await getDocs(likeToDeleteQuery)
      const likeId = likeToDeleteData.docs[0].id
      const likeToDelete = doc(db, "likes", likeId);
      await deleteDoc(likeToDelete);

      if (user) {
        setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeId));
      }
    } catch (err) {
      console.log(err);
    }
  }

  const hasUserLiked = likes?.find((like) => like.userId == user?.uid);

  // const colorLike = (event: any) => {
  //   event.target.classList.toggle('liked')
  // }

  return (
    <div className="post">
      <div className="title">
        <h1>{post.title}</h1>
      </div>
      <div className="body">
        <p>{post.description}</p>
      </div>
      <div className="footer">
        <p className='user'>@{post.username}</p>
        {/* <button onClick={addLike}>{hasUserLiked ? <>&#128078;</> : <>&#128077;</> }</button> */}
        <div className='flex gap-2'>
          <button onClick={hasUserLiked ? removeLike : addLike}>
            {hasUserLiked ? 
            <i className="liked fa fa-heart"></i> : 
            <i className="fa fa-heart"></i>}
          </button>
          {likes && <p>{likes?.length}</p>}
        </div>
      </div>
    </div>
  )
}