import { Link } from "react-router";
import { Header } from "./Header";
import './About.css'
import { Feedback } from "./Feedback";

export const About = () => {
    return (
        <>
            <Header />
            <div className="about">
                <div>
                    <img src="./src/assets/about-us.webp" alt="About Us" className="mb-2 w-100 img-fluid" style={{ height: '100px', objectFit: 'cover' }} />
                </div>
                <div className="text-center mb-1 fw-bold fs-6 px-3">Learn more about our company and our mission to provide holistic health solutions.</div>

                <div className="container-fluid">
                    <div className="pt-4 pb-2 content-wrapper">
                        <div className="d-flex flex-column flex-md-row align-items-start justify-content-center gap-3 px-4">
                            <div className="d-flex flex-column align-items-center justify-content-center gap-md-0 gap-3">
                                <div>
                                    <h5 className="headers">Our Story:</h5>
                                    <p className="descriptions"><span className="fw-bold">Ar-Rahmoh Islamic Cure & Blood Cupping Therapy Ltd</span> was founded with a vision to bring the healing power of nature to everyone. We are passionate about creating high-quality herbal products and services that promote wellness and balance in human body.</p>
                                </div>

                                <div>
                                    <h5 className="headers">Our Mission:</h5>
                                    <p className="descriptions">Our mission is to provide long term used & Islamic recommended natural and effective with modern health solutions that empower individuals to take control of their well-being. We are committed to using sustainable practices and sourcing the finest ingredients to ensure the highest quality products for our customers.</p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h5 className="headers">Our Values:</h5>
                                <div className="d-flex flex-column gap-2 border-0 values-list descriptions">
                                    <div>
                                        <span className="fw-bold me-1">✓</span>
                                        <div>
                                            <strong>Quality:</strong> We prioritize quality in every aspect of our business, from sourcing ingredients to manufacturing and customer services.
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-bold me-1">✓</span>
                                        <div>
                                            <strong>Integrity:</strong> We operate with honesty and transparency, building trust with our customers, communities and partners.
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-bold me-1">✓</span>
                                        <div>
                                            <strong>Sustainability:</strong> We are dedicated to minimizing our environmental impact and promoting sustainable practices in all areas of our business.
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-bold me-1">✓</span>
                                        <div>
                                            <strong>Customer Focus:</strong> We are committed to providing exceptional customer service and ensuring our customers' satisfaction with our products.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-md-4 gap-3 mt-4 px-4">
                            <div>
                                <h5 className="headers">Certification:</h5>
                                <p className="descriptions">
                                    We are proud to be certified by multiple regulatory bodies, including the <span>Federal Ministry of Health (FMOH)</span>, <span>Osun State Traditional Medicine Board (OSTMB)</span>, <span>Islamic and Prophetic Medicine Practitioners Association of Nigeria (IPMPAN)</span> & <span>National Association of Nigeria Traditional Medicine Practitioners (NANTMP)</span>, ensuring that our products and services meet the highest standards of safety and quality.
                                </p>
                            </div>

                            <div>
                                <h5 className="headers">Our Team:</h5>
                                <p className="descriptions">
                                    Our team is made up of passionate individuals who are dedicated to creating products and services that make positive impacts on people's lives. From our herbalists and researchers to our customer service representatives, we work together to ensure that every aspect of our business reflects our commitment to excellence.
                                </p>
                            </div>
                        </div>

                        <p className="caution"><span className="fw-bold">Caution!</span> All our services are humanity first focused, we welcome and respect all types of faith that comes for treatment. Your healthy and well-being, Our priority.</p>
                    </div>
                </div>

                <Feedback home={false} />

                <div className="d-flex flex-column align-items-center justify-content-center text-center c-t-a">
                    <h5 className="mb-3 headers">Contact Us</h5>
                    <p className="cta">If you have any questions, feedback, or inquiries about our products and services, please don't hesitate to contact us. We are here to help and support you on your wellness journey.</p>
                    <Link to="/contact" className="btn cta-btn">Get in Touch</Link>
                </div>
            </div>

        </>
    );
};