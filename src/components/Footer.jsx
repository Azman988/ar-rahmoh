import { Link } from 'react-router';
import Logo from '../assets/ar-Rahmoh-logo.webp';
import './Footer.css'

export function Footer() {
    return(
        <footer>
            <div>
                <Link to="/" ><img alt="arRahmoh-logo" src={Logo} style={{width: 55, height: 55, borderRadius: 10}} /></Link>
                Ar-Rah
            </div>
            <div></div>
            <div></div>
            <div>
                <p className='mb-0'>© 2024 Ar-Rahmoh Islamic Cure & Blood Cupping Therapy Ltd. All rights reserved.</p>
            </div>
        </footer>
    )
}


