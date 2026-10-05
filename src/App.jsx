import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Cakes from './Pages/Cakes'
import NavBar from './Components/Navbar/NavBar'
import FullScrenNav from './Components/FullScreenNav/FullScrenNav'
import Stairs from './PageTransition/Stairs'
import AboutUs from './Pages/AboutUs'
import Footer from './Components/Footer/Footer'
import ContactUs from './Pages/ContactUs'
import Review from './Pages/Review'
import CakesForm from './Pages/CakesFormSection'
import Order from './Pages/Order'

const App = () => {
  return (
    <div className='relative flex justify-between flex-col h-full'>
      <NavBar />
      <FullScrenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Sweeten-your-day' element={<Cakes />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/review' element={<Review />} />
        <Route path='/cakeOrder' element={<CakesForm />} />
        <Route path='/Orders' element={<Order />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
