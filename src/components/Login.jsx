import React, { useRef, useState } from 'react'
import Header from './Header'
import validateForm from './utils/validateForm'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './utils/firebase'

import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';
import { USER_AVATAR } from './utils/constants';


const Login = () => {

  let dispatch=useDispatch()

  let [isSignIn, setIsSignIn] = useState(true)
  let [errMsg, seterrMsg] = useState(null)

  let name=useRef(null)
  let email = useRef(null)
  let password = useRef(null)

  function handleFormClick() {
    // console.log(email)
    // console.log(password)
    // console.log(validateForm(email.current.value, password.current.value))
    const msg = validateForm(email.current.value, password.current.value)
    seterrMsg(msg)

    if (msg) return;

    if (!isSignIn) {
      // signup

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value , photoURL: USER_AVATAR
          }).then(() => {
            const {uid,email,displayName,photoURL}=auth.currentUser
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
          }).catch((error) => {
            seterrMsg(error.message)
          });


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // seterrMsg(errorCode+" - "+errorMessage)
          seterrMsg("Please Check Your Email and Password")
        });

    }
    else {
      // signin form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          const user = userCredential.user;
          // console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // seterrMsg(errorCode+" - "+errorMessage)
          seterrMsg("Please Check Your Email and Password")


        });

    }

  }


  function handleSignInForm() {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className='min-h-screen bg-black'>
      <Header />
      <div className='relative w-full h-screen overflow-hidden'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_small.jpg'
          className='w-full h-full object-cover'
        />

        <div className='border border-black bg-black text-white absolute top-1/5
        left-1/3 p-4 gap-4 rounded-lg w-1/3 opacity-85 text-wrap m-5'>

          <h1 className='text-2xl font-bold p-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

          <form onClick={(e) => e.preventDefault()} className='flex flex-col gap-4 p-4'>

            {isSignIn ? null : <input ref={name} type='text' placeholder='Full Name' className='border border-white p-2 rounded-lg bg-gray-950' />}
            <input ref={email} type='email' placeholder='Email' className='border border-white p-2 rounded-lg bg-gray-950' />
            <input ref={password} type='password' placeholder='Password' className='border border-white p-2 rounded-lg  bg-gray-950' />

            <p className='text-red-700 font-semibold'>{errMsg}</p>

            <button onClick={handleFormClick} className='bg-red-600 p-2 rounded-lg font-bold cursor-pointer text-wrap'>{isSignIn ? "Sign In" : "Sign Up"}</button>


          </form>

          <h1 className='p-4 cursor-pointer' onClick={handleSignInForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already Registered? Sign In now."}</h1>

        </div>

      </div>
    </div>
  )
}

export default Login