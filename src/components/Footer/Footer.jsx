import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import Logo from '../../assets/ar-Rahmoh-logo.webp';
import './Footer.css';

export function Footer() {
    // Dynamic year initialization to avoid hardcoding issues
    const currentYear = new Date().getFullYear();

    return (
        <footer className='modern-footer pt-5 pb-3 position-relative overflow-hidden'>
            <div className="rc-badge position-absolute top-0 end-0 px-3 py-2 bg-success-subtle text-success fw-bold border-bottom border-start border-light-dark fs-7 rounded-bl-4">
                RC: 6882869
            </div>

            <div className="container-fluid container-max px-4">
                <div className="row g-4 justify-content-between mb-5">
                    
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="d-flex flex-column gap-3">
                            <Link to="/" className='d-flex align-items-center text-decoration-none logo-link group-hover'>
                                <img 
                                    alt="Ar-Rahmoh logo" 
                                    src={Logo} 
                                    className="img-fluid rounded-3 border border-white-10"
                                    style={{ width: 55, height: 55, objectFit: 'cover' }} 
                                />
                                <div className='ms-2 text-white d-flex flex-column logo-text-group'>
                                    <span className="fw-extrabold tracking-wide fs-6 lh-sm mb-0">Ar-Rahmoh Islamic Cure</span>
                                    <span className="text-success-light fw-medium fs-7">& Blood Cupping Therapy</span>
                                </div>
                            </Link>
                            
                            <p className='text-white-50 fs-7 mb-0 max-w-350 lh-base'>
                                Your trusted partner in holistic health solutions, blending time-honored prophetic traditions with precise clinical care for complete family well-being.
                            </p>
                            
                            <div className='footer-motto-badge px-3 py-2 rounded-2 text-success bg-success-subtle border border-success-subtle fw-semibold fs-7 italic-style'>
                                "Your health and well-being, our top priorities."
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 col-xl-2">
                        <h6 className="footer-heading text-white text-uppercase tracking-wider fw-bold mb-3 fs-7">Quick Links</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 ps-0 mb-0">
                            <li><Link to="/" className='footer-nav-link text-white-50 fs-7 text-decoration-none transition-all'>Home</Link></li>
                            <li><Link to="/product" className='footer-nav-link text-white-50 fs-7 text-decoration-none transition-all'>Products</Link></li>
                            <li><Link to="/service" className='footer-nav-link text-white-50 fs-7 text-decoration-none transition-all'>Services</Link></li>
                            <li><Link to="/about" className='footer-nav-link text-white-50 fs-7 text-decoration-none transition-all'>About Us</Link></li>
                            <li><Link to="/contact" className='footer-nav-link text-white-50 fs-7 text-decoration-none transition-all'>Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3 col-xl-3">
                        <h6 className="footer-heading text-white text-uppercase tracking-wider fw-bold mb-3 fs-7">Contact Details</h6>
                        <div className="d-flex flex-column gap-3 text-white-50 fs-7">
                            <div className="d-flex align-items-start gap-2">
                                <MapPin size={16} className="text-success-light mt-1 flex-shrink-0" />
                                <span className="lh-base">Iwo, Osun State, Nigeria.</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <Phone size={16} className="text-success-light flex-shrink-0" />
                                <a href="tel:09046088723" className='footer-nav-link text-white-50 text-decoration-none transition-all'>0904 608 8723</a>
                            </div>
                            
                            <div className="mt-1">
                                <h6 className="footer-heading text-white text-uppercase tracking-wider fw-bold mb-2 fs-7">Follow Our Community</h6>
                                <div className='d-flex gap-2 social-media-track'>
                                    <a href="https://www.instagram.com/ar.rahmoh.cure/" target="_blank" rel="noreferrer" className="social-badge-btn p-2 rounded-3 text-white-50 d-inline-flex border border-white-10 transition-all text-decoration-none" aria-label="Instagram">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://www.tiktok.com/@ar.rahmoh.cure" target="_blank" rel="noreferrer" className="social-badge-btn p-2 rounded-3 text-white-50 d-inline-flex border border-white-10 transition-all text-decoration-none" aria-label="TikTok">
                                        <i className="fa-brands fa-tiktok"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-xl-3">
                        <div className="appreciation-card p-4 rounded-4 backdrop-blur border border-white-10 text-white-50 h-100 d-flex flex-column justify-content-center">
                            <h6 className="text-white fw-bold mb-2 fs-7 tracking-wide">Commitment & Appreciation</h6>
                            <p className='mb-0 fs-7 lh-base fw-semibold'>
                                "We are committed to providing you with the best therapies, natural remedies, and nutrition counseling to support your journey toward optimal health. Thank you for choosing Ar-Rahmoh Islamic Cure. We look forward to serving you."
                            </p>
                        </div>
                    </div>

                </div>

                <div className="pt-4 border-top border-white-10 text-center">
                    <p className='mb-0 text-white-50 fs-7 fw-light'>
                        &copy; {currentYear} <span className='fw-semibold text-white'>Ar-Rahmoh Islamic Cure & Blood Cupping Therapy Ltd</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
