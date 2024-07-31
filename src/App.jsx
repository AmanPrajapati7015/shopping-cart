
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import Footer from './components/footer'
import Product from './pages/product'
import Homepage from './pages/homepage'
import CategoryPage from './pages/category'
import Bag from './pages/bag'
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