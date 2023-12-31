import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Topheader from './component/top header/Topheader'
import Header from './component/header/Header'
import MidHeader from './component/header/MidHeader'
import Footer from './component/footer/Footer'
import Product from './component/product/Product'
import Home from './component/home/Home'
import ProductDetails from './component/product/ProductDetails.jsx'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Topheader/>
      <Header/>
      <MidHeader />
      <Routes>
        <Route exact path='/' element={<Home/>  } />
        <Route path='/product/:productId' element={<ProductDetails />} />

      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
