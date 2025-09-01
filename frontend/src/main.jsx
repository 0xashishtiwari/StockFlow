
import { createRoot } from 'react-dom/client'
import HomePage from './landing_page/home/HomePage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Signup from '../src/landing_page/signup/Signup'
import PricingPage from '../src/landing_page/pricing/PricingPage'
import AboutPage from '../src/landing_page/about/AboutPage'
import ProductPage from '../src/landing_page/products/ProductPage'
import SupportPage from '../src/landing_page/support/SupportPage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound'
import './main.css';
createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
 
)
