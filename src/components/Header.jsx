import React, { useEffect } from 'react'
import {signOut } from "firebase/auth";
import {auth} from './utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from './utils/userSlice';
import { toggleAiSearch } from './utils/seekAiSlice';


export const Header = () => {
  const user=useSelector(store=> store.user)
  const showAisearch=useSelector(store=> store.seekAi.showAisearch)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  function handleSeekAIclick(){
    // console.log("handle seek ai click");
    dispatch(toggleAiSearch())
  }

  
  function handleSignOut(){
    // console.log("handle sign out");
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate('/error-page')
    });
  }

    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate('/browse')
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate('/')
            }
        });
        
        // unsubscribing when component unmounts
        return ()=> unsubscribe()
      },[])

  return (
    <div className='absolute z-50 w-full px-7  bg-gradient-to-b from-black flex justify-between' >
      <div>
        <img src="/seekflix_logo.png" alt="SeekFlix-logo" className='w-50 cursor-pointer mt-3' />
      </div>

      {user && (<div className='w-70 h-17 flex gap-3 p-2'>
        <button onClick={handleSeekAIclick} className='bg-purple-900 px-6 text-white rounded-lg cursor-pointer text-nowrap relative z-50 flex items-center justify-center'>
          {
            showAisearch ? <>Home&nbsp;<i class="fa-regular fa-house"></i></> : <>SeekAI&nbsp;<i className="fa-brands fa-openai"></i></>
          }
          
        </button>
        <img src={user?.photoURL} alt="User-Avatar" className='rounded-lg cursor-pointer' />
        <button className='bg-white font-bold rounded-xl text-wrap px-6 cursor-pointer ' onClick={handleSignOut}>Sign Out</button>
      </div>)}

    </div>
  )
}

export default Header