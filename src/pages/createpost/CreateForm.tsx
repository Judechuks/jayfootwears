import React from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

interface CreateFormData {
  title: string,
  description: string,
}

function CreateForm() {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description."),
  })

  const {register, handleSubmit, formState:{errors}} = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  })

  // Post Reference from firebase database (chuksjude7 account)
  const postRef = collection(db, "posts")  // posts  is collection name from firebase
 
  const onCreatePost = async (data: CreateFormData) => {
    // console.log(data);
    await addDoc(postRef, {
      title: data.title, // alternatively for the data.title & description, we could
      description: data.description,  // use '...data,' instead
      username: user?.displayName, // username from google authentication
      userId: user?.uid, // id from google authentication
    })

    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit(onCreatePost)} className='form-container'>
      <input type='text' placeholder='Title' {...register("title")}/>
      <p className="error">{errors.title?.message} </p>
      <textarea placeholder='Description' {...register("description")} className='desc'/>
      <p className="error">{errors.description?.message} </p>
      <input type='submit' className='btn' />
    </form>
  )
}
 
export default CreateForm 
/*
You can modify the rules in firebase, so as to allow
read and write right to the database (else data won't be submitted.)
*/ 