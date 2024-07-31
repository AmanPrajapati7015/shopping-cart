import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Navbar from './components/navbar'
import Product from './pages/product'
import Homepage from './pages/homepage'
import CategoryPage from './pages/category'
import Bag from './pages/bag'
import Footer from './components/footer'

import './index.css'


function App() {

  const [bag, setBag] = useState([]);

  return (
    <>
    <BrowserRouter>
      <Navbar bagCount={bag.length}/>
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/category/:category' element={<CategoryPage />}/>
          <Route path='/product/:id' element={<Product setBag={setBag} />}/>
          <Route path='/bag' element={<Bag bag={bag} setBag={setBag}/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App