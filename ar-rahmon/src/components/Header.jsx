import { Link, NavLink } from 'react-router'
import { useState } from 'react'
import Logo from '../assets/ar-rahmon-logo.jpeg'
import './Header.css'

export function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <nav className="sticky-top navbar p-1 navbar-expand-md">
            <div className="d-flex align-items-center justify-content-between w-100 px-4 py-2 text-white rounded-2 navbar-container">
                {/* Logo  */}
                <Link to="/">
                    <img src={Logo} alt="arRahmon-logo" style={{
                        width: 55, height: 55, borderRadius: 10
                    }} />
                </Link>
                <div className='d-flex align-items-center gap-4'>
                    {/* <!-- Desktop Nav Links --> */}
                    <div className="d-flex align-items-center gap-3">
                        <button onClick={() => { setMenu(true) }} className="btn ms-2 navbar-toggler">
                            <i className="fa-solid fa-list-ul"></i>
                        </button>
                        {/* <!-- Navbar Links --> */}
                        <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                            <ul className="navbar-nav text-white gap-2">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active">Home</NavLink>
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
                    <a href="tel:08165855687" className="d-flex align-items-center justify-content-center gap-2 py-2 px-3 rounded-3 text-decoration-none call-btn" target="_blank">
                        <i className="fa-solid fa-phone fs-5"></i>Call Now
                    </a>
                </div>
                
            </div>
            {/* <!-- Mobile Navbar --> */}
            <div className={`position-fixed top-0 end-0 d-flex flex-column align-items-center sideNav ${menu === false ? '' : 'show'}`} id="sideNav">
                <div className="sticky-top d-flex align-items-center justify-content-between py-3 border-bottom border-white side-header">
                    {/* <!-- Close Button --> */}
                    <button onClick={() => { setMenu(false) }} className="btn close-btn" id="close-btn">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                {/* <!-- Navbar Links --> */}
                <ul className="navbar-nav gap-5 py-5 px-4 w-100 border-bottom border-white">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-center">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/product" className="nav-link text-center">Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/service" className="nav-link text-center">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link text-center">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link text-center">Contact</NavLink>
                    </li>
                </ul>
                <div className="w-100 d-flex align-items-center justify-content-center px-3 my-3">
                    <a href="tel:08165855687" className="d-flex align-items-center justify-content-center gap-2 py-2 px-3 rounded-2 text-decoration-none bg-white fw-bold mt-2 mobile-call-btn" target="_blank">
                        <i className="fa-solid fa-phone fs-4"></i>Call Now
                    </a>
                </div>
            </div>
        </nav>
    )
}

