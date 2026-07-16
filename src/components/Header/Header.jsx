import { Link, NavLink, useNavigate } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import Logo from '../../assets/ar-Rahmoh-logo.webp'
import './Header.css'
import { NavMenuList } from '../SideNav/SideNav';
import { Menu, PhoneCall, ShoppingCart, X } from 'lucide-react';
import { useCart } from '../CartContext';
import { SideCart } from '../SideCart';

export function Header() {
    const [open, setOpen] = useState(false);
    const { cart, isCartOpen, setIsCartOpen, cartCount, updateCartQty, removeFromCart } = useCart();
    const menu = useRef(null);
    const switchRef = useRef(null);
    const navigate = useNavigate();
    const timerRef = useRef(null);

    // Start timer on mouse-down or touch-start
    const handlePressStart = () => {
        timerRef.current = setTimeout(() => {
            navigate('/admin/login');
        }, 4000); // 4-second hold requirement
    };

    // Clear timer if user releases early
    const handlePressEnd = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
    };

    useEffect(() => {
        const handler = (e) => {
            if (open && menu.current && !menu.current.contains(e.target) && switchRef.current && !switchRef.current.contains(e.target)) setOpen(false)
        }
        document.addEventListener('mousedown', handler);
        return () => { document.removeEventListener('mousedown', handler) }
    })

    return (
        <>
            <nav className="sticky-top navbar p-1 navbar-expand-md" >
                <div className=" w-100 navbar-container rounded-4">
                    <div className='container-fluid container-max d-flex align-items-center justify-content-between px-4 py-3 text-white'>

                        {/* Logo  */}
                        <Link 
                            to="/"
                            onMouseDown={handlePressStart}
                            onMouseUp={handlePressEnd}
                            onTouchStart={handlePressStart}
                            onTouchEnd={handlePressEnd}
                            onMouseLeave={handlePressEnd} end="true">
                            <img src={Logo} alt="arRahmoh-logo" style={{
                                width: 55, height: 55, borderRadius: 10
                            }} />
                        </Link>
                        <div className='d-flex align-items-center gap-3'>
                            <button onClick={() => setIsCartOpen(!isCartOpen)} className="position-relative text-white btn cart-icon" aria-label="View Cart">
                                <ShoppingCart size={22} className="cart-svg-icon" />
                                {cartCount > 0 && (
                                    <span className="position-absolute mt-2 translate-middle badge rounded-circle bg-success text-white border border-white d-flex align-items-center justify-content-center fs-8">
                                        {cartCount}
                                    </span>
                                )}
                            </button>

                            {/* Desktop Nav Links */}
                            <div className="d-flex align-items-center gap-3">
                                {/* Nav Control */}
                                <div className='nav-control'>
                                    {open ? <button onClick={() => setOpen(false)} className="btn text-white" ref={switchRef}>
                                        <X size={22} />
                                    </button> : <button onClick={() => setOpen(true)} className="btn text-white">
                                        <Menu size={22} />
                                    </button>}
                                </div>

                                {/* Navbar Links */}
                                <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                                    <ul className="navbar-nav text-white gap-2">
                                        <li className="nav-item">
                                            <NavLink to="/" className="nav-link" end="true">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/product" className="nav-link">Products</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/service" className="nav-link">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/about" className="nav-link">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="tel:09046088723" className="call-btn" target="_blank">
                                <PhoneCall size={20} /> Call Us
                            </a>
                        </div>

                    </div>
                </div>
                {/* Mobile Navbar */}
                {open && <NavMenuList setOpen={setOpen} menu={menu} />}
            </nav>

            {/* --- Global Side drawer Cart & Dynamic Description Modal injection points --- */}
            {isCartOpen && (
                <SideCart
                    cart={cart}
                    updateCartQty={updateCartQty}
                    removeFromCart={removeFromCart}
                    close={() => setIsCartOpen(false)}
                />
            )}
        </>
    )
}
