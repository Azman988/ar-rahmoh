import { Link } from 'react-router'
import { Header } from './Header'
import Logo from '../assets/ar-rahmon-logo.jpeg'
import { products } from '../../products'
import WhatsAppOrderBtn from './WhatsappBtn'
import './HomePage.css'


export function HomePage() {
    return (
        <>
            <Header />

            <>
                <section className="banner">
                    <div className="content-container d-flex align-items-center justify-content-center">
                        <div className='banner-content text-center d-flex flex-column gap-3'>
                            <div>
                                <p className="fs-2 m-0 pe-none">Welcome to</p>
                                <h1 className="fw-bold pe-none">AR-RAHMOH ISLAMIC CURE & BLOOD CUPPING THERAPY LTD</h1>
                                <p className="m-0 description">
                                    Your Trusted Source for Modern Wellness & Prophetic Medicine
                                </p>
                            </div>
                            <div className="my-3 mb-4 fw-bold description">
                                • Medications | Holistic Supplements | Prophetic Medicine •
                            </div>
                            <div className="cta-buttons">
                                <a href="#product-section" className="shop-btn me-2">SHOP NOW</a>
                                <a href="#aboutSection" className="learn-btn">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='container-fluid py-4 d-flex align-items-center justify-content-center pillars-container'>
                    <div className='flex-md-row gap-5'>
                        <div>
                            <div className="pillar-icon text-danger heart-pillar">
                                <i className="fa-solid fa-heart-pulse"></i>
                            </div>
                            <h6 className='fw-bold'>Perfect Healing</h6>
                            <p>"We combine time-honored Sunnah traditions with precise therapeutic techniques to facilitate a complete and balanced recovery for mind and body."</p>
                        </div>
                        <div>
                            <div className="pillar-icon text-success leaf-pillar">
                                <i className="fa-solid fa-leaf"></i>
                            </div>
                            <h6>Natural Supplement</h6>
                            <p>"Our curated selection of organic remedies and prophetic nutrients is sourced for purity, ensuring you receive the most potent benefits nature has to offer."</p>
                        </div>
                        <div>
                            <div className="pillar-icon text-primary handshake-pillar">
                                <i className="fa-solid fa-handshake"></i>
                            </div>
                            <h6>Built on Trust</h6>
                            <p>"Integrity is the foundation of our practice; we are dedicated to providing transparent, ethical care and high-quality products that you can rely on for your family's well-being."</p>
                        </div>
                    </div>
                </section>

                <section className="d-flex flex-column flex-md-row align-items-stretch">
                    <div className="container-fluid col-md-6 col-12 home">
                        <h1 className="fw-bold pe-none">AR-RAHMOH ISLAMIC CURE & BLOOD CUPPING THERAPY</h1>
                        <div className="description">
                            We are committed to providing high-quality products and exceptional service
                            to ensure your health and well-being.
                        </div>
                        <div className='d-flex flex-column gap-3 mt-3'>
                            <h6>Our commitment to deliver the best, has granted Us.</h6>
                            <div className="key-note"><span>✓</span> Certification of Organization.</div>
                            <div className="key-note"><span>✓</span> Recommendations from Clients.</div>
                            <div className="key-note"><span>✓</span> Our Community Trust & more..</div>
                        </div>
                        <div className="w-100 mt-5 text-end d-flex align-items-center justify-content-end gap-2">
                            <Link to="/product" className="about-btn">Know Us More</Link>
                            <Link to="/product" className="contact-btn">Reach Us</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 position-relative banner-image">
                        <img src={Logo} alt="Natural Islamic Medicine Ingredients" />
                    </div>
                </section>

                <section className="container-fluid pt-2 pb-3 product-section" id='product-section'>
                    <h5 className='text-center py-4'>Our Curated Selection</h5>
                    <div className="d-flex align-items-center gap-2 overflow-auto p-3 product-container">
                        {products.slice(0, 5).map(product => {
                            return (
                                <div key={product.id} className="bg-white p-2 pb-3 rounded-3">
                                    <div style={{ width: 210, height: 210, overflow: 'hidden' }} className="border rounded-3 mb-2">
                                        <img src={product.img} alt={product.name} className='w-100' style={{ objectFit: 'cover', }} />
                                    </div>
                                    <h6>{product.name}</h6>
                                    <WhatsAppOrderBtn productName={product.name} />
                                </div>
                            )
                        })}
                    </div>
                    <div className='text-center mt-4 mb-2'>
                        <Link to="/product" className='btn btn-success'>View all Products</Link>
                    </div>
                </section>

                <section className='text-center py-4 service-section'>
                    <h5 className='text-center'>What We Offer</h5>
                    <div className="services-container">
                        <div className="services"><span>✓</span> Authentic Hijama Therapy</div>
                        <div className="services"><span>✓</span> Bee Venom Injection</div>
                        <div className="services"><span>✓</span> Natural Health Supplements</div>
                        <div className="services"><span>✓</span> Expert Health Consultation</div>
                    </div>
                    <Link to="/service" className='btn btn-success'>View all Services</Link>
                </section>

                <section className='py-4 comment-section'>
                    <h5 className='text-center py-3'>
                        Client's Comments
                    </h5>
                    <div className='d-flex flex-column flex-md-row align-items-stretch gap-3 px-4'>
                        <div className='comment-div'>
                            <h6>Mr Yussuf</h6>
                            <div className='comment'>
                                "Alhamdullilah and thanks to Ar Rahmah Islamic Cure and Blood Cupping Therapy for the exceptional treatment I recieved from them. With the combination of their Hijamah, Sauna and bee venom therapy, my healthy self was replaced. Their service was handled with professionalism and care for my well-being."
                            </div>
                            <p>Ikeja, Lagos.</p>
                        </div>
                        <div className='comment-div'>
                            <h6>Mrs Ruqoyah</h6>
                            <div className='comment'>
                                "Ar Rahmah Islamic Cure and Blood Cupping Therapy is such a great blessing, There Fibriod Shrinker medication is really working, the disease is just urinated like nothing. May Allah bless your company more and more"
                            </div>
                            <p>Iwo, Osun.</p>
                        </div>
                        <div className='comment-div'>
                            <h6>Alfa Usman</h6>
                            <div className='comment'>
                                "Jedi Jedi is nobody's mate, At Ar-rahmah islamic cure and blood cupping you're confirm. May Allah never let you short of His mercy and blessings. The Agbo Jedi is really great, like i never experience the pain. I'll insha Allah recommend more customers for you."
                            </div>
                            <p>Ojoo, Ibadan.</p>
                        </div>
                    </div>
                </section>

                <section className='text-center contact-section'>
                    <div className='d-flex flex-column align-items-center justify-content-center px-3 py-4'>
                        <h6>Begin Your Aid Journey Today</h6>
                        <p>Need a Consultation? Reach out on WhatsApp or call for Personalized Advice from our expert.</p>
                        <div className="d-flex flex-wrap gap-3 mt-2">
                            <a href="https://wa.me/2348065855687" className="btn d-flex align-items-center px-4 py-2 whatsapp-btn">
                                <i className="fab fa-whatsapp me-2"></i> WhatsApp Us
                            </a>

                            <a href="tel:08165855687" className="btn btn-outline-light d-flex align-items-center px-4 py-2">
                                <i className="fas fa-phone me-2"></i> Call Now
                            </a>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}