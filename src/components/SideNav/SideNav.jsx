import { NavLink } from 'react-router'
import '../Header/Header.css'
import { Contact, Home, Info, MessageSquare, Package, Stethoscope } from 'lucide-react'

export function NavMenuList({ setOpen, menu }) {
    const linkStyle = "nav-link d-flex align-items-center gap-4";

    return (
        <div className={`position-fixed pb-2 d-flex flex-column align-items-center sideNav animate-fade-in-down`} ref={menu}>
            {/* Navbar Links */}
            <ul className="navbar-nav gap-3 py-4 w-100 border-bottom border-white">
                <li className="nav-item">
                    <NavLink to="/" onClick={() => { setOpen(false) }} className={`${linkStyle}`} end="false"><Home size={20} strokeWidth={2} /> Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/product" onClick={() => { setOpen(false) }} className={`${linkStyle}`}><Package size={20} strokeWidth={2} /> Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/service" onClick={() => { setOpen(false) }} className={`${linkStyle}`}><Stethoscope size={20} strokeWidth={2} color="#06b6d4" /> Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" onClick={() => { setOpen(false) }} className={`${linkStyle}`}><Info size={20} strokeWidth={2} /> About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" onClick={() => { setOpen(false) }} className={`${linkStyle}`}><MessageSquare size={20} strokeWidth={2} /> Contact</NavLink>
                </li>
            </ul>
            <div className="w-100 px-4 my-2">
                <a href="tel:09046088723" className="mt-2 mobile-call-btn" target="_blank">
                    <i className="fa-solid fa-phone fs-5"></i>Call Us
                </a>
            </div>
        </div>
    )
}

