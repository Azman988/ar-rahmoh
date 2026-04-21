import { Header } from "./Header";

export const About = () => {
    return (
        <div className="about">
            <Header />
            <h1 className="text-center py-2 fs-3">About Us</h1>
            <p className="text-center px-3">Learn more about our company and our mission to provide holistic health solutions.</p>
            <div className="container-fluid py-4">
                <h4 className="fs-4 mb-3">Our Story</h4>
                <p>Ar-Rahmoh was founded with a vision to bring the healing power of nature to everyone. We are passionate about creating high-quality herbal products that promote wellness and balance in the body.</p> 

                <h4 className="fs-4 mb-3 mt-4">Our Mission</h4>
                <p>Our mission is to provide natural, effective, and affordable health solutions that empower individuals to take control of their well-being. We are committed to using sustainable practices and sourcing the finest ingredients to ensure the highest quality products for our customers.</p>

                <h4 className="fs-4 mb-3 mt-4">Our Values</h4>
                <ul>
                    <li><strong>Quality:</strong> We prioritize quality in every aspect of our business, from sourcing ingredients to manufacturing and customer service.</li>
                    <li><strong>Integrity:</strong> We operate with honesty and transparency, building trust with our customers and partners.</li>
                    <li><strong>Sustainability:</strong> We are dedicated to minimizing our environmental impact and promoting sustainable practices in all areas of our business.</li>
                    <li><strong>Customer Focus:</strong> We are committed to providing exceptional customer service and ensuring our customers' satisfaction with our products and services.</li>
                </ul>

                <h4 className="fs-4 mb-3 mt-4">Certification</h4>
                <p>We are proud to be certified by the <span>Federal Ministry of Health (FMOH)</span>, <span>Osun State Traditional Medicine Board (OSTMB)</span>, <span>Islamic and Prophetic Medicine Practitioners Association of Nigeria (IPMPAN)</span>, and <span>National Association of Nigeria Traditional Medicine Practitioners (NANTMP)</span>, ensuring that our products meet the highest standards of safety and quality.</p>

                <h4 className="fs-4 mb-3 mt-4">Our Team</h4>
                <p>Our team is made up of passionate individuals who are dedicated to creating products that make a positive impact on people's lives. From our herbalists and researchers to our customer service representatives, we work together to ensure that every aspect of our business reflects our commitment to excellence.</p>
            </div>
        </div>
    );
};