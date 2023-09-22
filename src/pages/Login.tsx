import React from 'react'
import {auth, provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

function Login(){
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    navigate('/')
  }

  return (
    <div className='login-header'>
     <p className='text-lg font-bold my-2'>Sign in With Google To continue</p>
     <button onClick={signInWithGoogle} className='btn'>Sign In With Google</button>
    </div>
  )
}
export default Login