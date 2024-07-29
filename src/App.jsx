import { useState } from 'react'
import Navbar from './navbar'
import './index.css'
import Footer from './footer'
import Product from './product'


function App() {

  return (
    <>
      <Navbar/>
      <Product/>
      <Footer/>
    </>
  )
}

export default App

// Todos
// 1. remove nav bar options in smaller screen size