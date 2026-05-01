import { NavLink } from 'react-router'
import '../Header/Header.css'

export function SideNav({ open, setOpen, menu }) {
    return (
        <div className={`position-fixed pb-2 d-flex flex-column align-items-center sideNav ${open === false ? '' : 'show'}`} ref={menu}>
            <div className="py-2 text-white fs-6 pe-none border-bottom w-100 text-center side-header rc-code">
                RC.6882869
            </div>
            {/* Navbar Links */}
            <ul className="navbar-nav gap-5 p-4 w-100 border-bottom border-white">
                <li className="nav-item">
                    <NavLink to="/" onClick={() => { setOpen(false) }} className="nav-link text-center" end="false">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/product" onClick={() => { setOpen(false) }} className="nav-link text-center">Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/service" onClick={() => { setOpen(false) }} className="nav-link text-center">Services</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" onClick={() => { setOpen(false) }} className="nav-link text-center">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" onClick={() => { setOpen(false) }} className="nav-link text-center">Contact</NavLink>
                </li>
            </ul>
            <div className="w-100 d-flex align-items-center justify-content-center px-3 my-3">
                <a href="tel:09046088723" className="mt-2 mobile-call-btn" target="_blank">
                    <i className="fa-solid fa-phone fs-5"></i>Call Us
                </a>
            </div>
        </div>
    )
}