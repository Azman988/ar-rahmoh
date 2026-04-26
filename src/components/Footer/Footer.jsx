import { Link } from 'react-router';
import Logo from '../../assets/ar-Rahmoh-logo.webp';
import './Footer.css'

export function Footer() {
    return(
        <footer className='pt-5 pb-3 px-4 px-md-5 position-relative'>
            <div className='d-flex flex-column flex-xl-row gap-3 align-items-stretch justify-content-between'>
                {/* Footer Info */}
                <div className='col-8 w-md-100 w-xl-75 d-flex flex-column flex-md-row align-items-stretch justify-content-between gap-4 footer-info'>
                    <div>
                            {/* Logo */}
                        <Link to="/" end="true" className='d-flex align-items-center text-decoration-none logo-link'>
                            <img alt="arRahmoh-logo" src={Logo} style={{width: 55, height: 55, borderRadius: 10}} />
                            <div className='ms-2 text-white d-flex flex-column fw-bold logo-text'>
                                <span>Ar-Rahmon Islamic Cure <br />
                                & Blood Cupping Therapy</span> 
                            </div>
                        </Link>
                            {/* Description */}
                        <p className='mt-3 mb-0 text-white' style={{maxWidth: 350}}>
                            Your trusted partner in holistic health solutions, blending traditional wisdom with modern care for a healthier you.
                        </p>
                            {/* Motto */}
                        <p className='fw-bold mb-0 mt-3 px-1 motto'>
                            "Your health and well-being, our top priorities." 
                        </p>
                    </div>
                        {/* Links */}
                    <div className='Links'>
                        <h6>Quick Links</h6>
                        <div className='d-flex flex-column gap-1 ms-2'>
                            <Link to="/" className='text-white'>Home</Link> 
                            <Link to="/product" className='text-white'>Products</Link> 
                            <Link to="/service" className='text-white'>Services</Link> 
                            <Link to="/about" className='text-white'> About Us</Link> 
                            <Link to="/contact" className='text-white'> Contact Us</Link>
                        </div>
                    </div>
                        {/* Contact Information */}
                    <div>
                        <h6>Contact Information</h6>
                        <div className='mb-2'>
                            <p className='mb-1 text-white'>Our Head Office:</p>
                            <p className='mb-0 text-white location-address'><span><i className="fa-solid fa-location-dot"></i> </span> Iwo, Osun State, Nig.</p>
                        </div>
                        <div>
                            <p className='mb-1 text-white'>Contact: </p>
                            <a href="tel:09046088723" className='text-white'><span><i className="fa-solid fa-phone"></i> </span> 0904 608 8723</a>
                        </div>
                    </div> 
                </div>
                    {/* Appreciation Note */}
                <div className='col-xl-3 text-center text-white my-4 mt-xl-0 pe-none appreciation'>
                    <h6>Commitment & Appreciation</h6>
                    <p className='mb-0'>
                        "We are committed to providing you with the best therapies, natural remedies and dietetics to support your journey towards optimal health. Thank you for choosing Ar-Rahmoh Islamic Cure & Blood Cupping Therapy Ltd. We look forward to serving you and being a part of your wellness journey."
                    </p>
                </div>
            </div>
                {/* Copyright */}
            <div>
                <p className='mb-1 mt-3 text-center text-white'>© 2024 <span className='fw-bold'>Ar-Rahmoh Islamic Cure & Blood Cupping Therapy Ltd</span>. All rights reserved.</p>
            </div>
        </footer>
    )
}


