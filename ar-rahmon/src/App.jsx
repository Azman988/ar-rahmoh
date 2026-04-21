// import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './components/HomePage'
import { Product } from './components/Product'
import { Service } from './components/Service'
import { About } from './components/About'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App
