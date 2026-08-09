import { Routes, Route, Navigate, Outlet } from 'react-router-dom'; 
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';

// Layout & Global Components
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CartProvider } from './components/CartContext';

// Public User-facing Pages
import { HomePage } from './components/HomePage';
import { Product } from './components/Product';
import { Service } from './components/Service';
import { About } from './components/About';
import { Contact } from './components/Contact';

// Admin Upload Board
import { AdminLogin } from './Admin/AdminLogin';
import { ProtectedAdminRoute } from './Admin/ProtectedAdminRoute';
import { AdminUpload } from './Admin/AdminUpload';
import { ProductDetail } from './components/ProductDetail';

// --- VISUAL COUPLING PIPELINE LAYOUT ---
// This acts as a wrapper that attaches the navigation components only to nested children
const PublicLayout = () => (
  <>
    <Header />
    <Outlet /> {/* Nested routes will render here */}
    <Footer />
  </>
);

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        
        {/* --- Public Route Grouping --- */}
        {/* Wraps all core business pages together under the Layout design engine */}
        <Route element={<PublicLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>

        {/* --- ADMIN AUTHENTICATION GATE ROUTE --- */}
        {/* Isolated completely away from standard consumer layouts */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* --- ADMIN DASHBOARD ROUTES --- */}
        <Route element={<ProtectedAdminRoute />}>
          {/* All routes declared down here will strictly verify security headers before loading */}
          <Route path="/admin/dashboard/upload" element={<AdminUpload />} />
        </Route>

        {/* 404 CATCH-ALL ROUTE FALLBACK - Auto redirects broken links safely back home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
