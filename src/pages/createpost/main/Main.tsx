import React, { useEffect, useState } from "react";
import {getDocs, collection} from "firebase/firestore";
import {db} from '../../../config/firebase'
import { Post } from "./Post";

  // Interface to represent the type of the state
  export interface Post{
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
  }

export const Main = () => {
  const [postsList, setPostsList] = useState<Post[] | null>(null) 
  // useState is declared as an 'array of post' or 'null' (when it is unfetched)
  const postsRef = collection(db, "posts")

  const getPosts = async () => {
    const data = await getDocs(postsRef)
    setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]); // because the data is yet to be fetched, so we describe it 'as a post array'
    
  }

  //useEffect to call 'getPosts()' everytime the page refreshes or mounts.
  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="postContainer">
      {postsList?.map((post) => (
        <Post post={post}/>
      ))}
    </div>
  )
}