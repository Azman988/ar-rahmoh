// import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './components/HomePage'
import { Product } from './components/Product'
import { Service } from './components/Service'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/ar-rahmoh/' element={<HomePage />} />
        <Route path='/ar-rahmoh/product' element={<Product />} />
        <Route path='/ar-rahmoh/service' element={<Service />} />
        <Route path='/ar-rahmoh/about' element={<About />} />
        <Route path='/ar-rahmoh/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
