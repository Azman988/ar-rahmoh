// import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import { HomePage } from './components/HomePage'
import { Product } from './components/Product'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
