
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import Footer from './footer'
import Product from './product'
import Homepage from './homepage'
import CategoryPage from './category'
import Bag from './bag'
import { useState } from 'react'





function App() {

  const [bag, setBag] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage bagCount={bag.length}/>}/>
          <Route path='/category/:category' element={<CategoryPage bagCount={bag.length}/>}/>
          <Route path='/product/:id' element={<Product setBag={setBag} bagCount={bag.length}/>}/>
          <Route path='/bag' element={<Bag bag={bag} setBag={setBag}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App

// Todos
// 1. make homepage
// 2. show no. of items in bag on navbar 
