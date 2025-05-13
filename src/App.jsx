import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Faqs from './Pages/Faqs'
import Reviews from './Pages/Reviews'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
