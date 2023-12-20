import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Topheader from './component/top header/Topheader'
import Header from './component/header/Header'
import MidHeader from './component/header/MidHeader'
import Footer from './component/footer/Footer'
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Topheader/>
      <Header/>
      <Routes>
        <Route exact path='/' element={ <MidHeader /> } />
       
        
       
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
