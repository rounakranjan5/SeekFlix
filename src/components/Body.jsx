import React, { useEffect } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import ErrorPage from './ErrorPage';


const Body = () => {

  

  const appRouter=createBrowserRouter([

    {
        path:'/',
        element:<Login/>
    },

    {
        path:'/browse',
        element:<Browse/>
    },

    {
      path:'/error-page',
      element:<ErrorPage/>
    }

  ])




  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body