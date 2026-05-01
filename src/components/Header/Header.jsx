import { Link, NavLink } from 'react-router'
import { useState, useRef, useEffect } from 'react'
import Logo from '../../assets/ar-Rahmoh-logo.webp'
import './Header.css'
import { SideNav } from '../SideNav/SideNav';

export function Header() {
    const [open, setOpen] = useState(false);
    const menu = useRef(null);
    const switchRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if (open && menu.current && !menu.current.contains(e.target) && switchRef.current && !switchRef.current.contains(e.target))  setOpen(false)
        }

        document.addEventListener('mousedown', handler);

        return () => {document.removeEventListener('mousedown', handler)}
    })

    return (
        <nav className="sticky-top navbar p-1 navbar-expand-md" >
            <div className="d-flex align-items-center justify-content-between w-100 px-4 py-2 text-white rounded-2 navbar-container">
                {/* Logo  */}
                <Link to="/" end="true">
                    <img src={Logo} alt="arRahmoh-logo" style={{
                        width: 55, height: 55, borderRadius: 10
                    }} />
                </Link>
                <div className='d-flex align-items-center gap-4'>
                    {/* Desktop Nav Links */}
                    <div className="d-flex align-items-center gap-3">
                        {/* Nav Control */}
                        <div className='nav-control'>
                            {open === true ? <button onClick={() => setOpen(false)} className="btn ms-2 fs-6 close-menu" ref={switchRef}>
                                <i className="fas fa-times fs-5"></i>
                            </button> : <button onClick={() => setOpen(true)} className="btn ms-2 fs-5 open-menu">
                                <i className="fa-solid fa-list-ul"></i>
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
                        <i className="fa-solid fa-phone fs-5"></i>Call Us
                    </a>
                </div>
                
            </div>
            {/* Mobile Navbar */}
            <SideNav open={open} setOpen={setOpen} menu={menu} />
        </nav>
    )
}

