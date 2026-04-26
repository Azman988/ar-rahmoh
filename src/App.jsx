import { Routes, Route } from 'react-router'
import './App.css'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { Header } from './components/Header/Header'
import { HomePage } from './components/HomePage'
import { Product } from './components/Product'
import { Service } from './components/Service'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      
      <ScrollToTop />

        <Routes>
          <Route path='/ar-rahmoh/' element={<HomePage />} />
          <Route path='/ar-rahmoh/product' element={<Product />} />
          <Route path='/ar-rahmoh/service' element={<Service />} />
          <Route path='/ar-rahmoh/about' element={<About />} />
          <Route path='/ar-rahmoh/contact' element={<Contact />} />
        </Routes>

      <Footer />
    </>
  )
}

export default App
