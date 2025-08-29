import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Fruits from './componenta/fruits/Fruits'
import Dairy from './componenta/dairy/Dairy'
import Seafood from './componenta/seafood/Seafood'
import AllProducts from './componenta/allproducts/AllProducts'
import Layout from './componenta/layout/Layout'


const App = () => {

  let router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element: <Home/>,
        },
        {
      path:'/fruits',
      element:<Fruits/>,
    },
    {
      path:'/dairy',
      element:<Dairy/>,
    },
    {
      path:'/seafood',
      element:<Seafood/>,
    },
    {
      path:'/allproducts',
      element:<AllProducts/>,
    },
      ]
    },
    
  ])

  return <RouterProvider router={router}/>
}

export default App