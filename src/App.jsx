
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './navbar'
import './index.css'
import Footer from './footer'
import Product from './product'
import Homepage from './homepage'
import CategoryPage from './category'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Homepage/>,
    errorElement: <p>this page don't exist</p>
  },
  {
    path:'/product/:id',
    element:<Product/>
  },
  {
    path:'/category/:category',
    element: <CategoryPage/>
  }
])


function App() {

  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  )
}

export default App

// Todos
// 1. remove nav bar options in smaller screen size