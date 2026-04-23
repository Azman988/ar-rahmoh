import { Link } from "react-router"
import { Header } from "./Header"
import './Service.css'

export function Service() {
    return (
        <>
            <Header />
            <section>
                <div>
                    <img src="./src/assets/services.webp" alt="Services" className="mb-2 w-100 img-fluid" style={{ height: '100px', objectFit: 'cover' }} />
                </div>

                <div className="container-fluid">
                    <p className="text-center pb-2 px-3 intro">At <span className="fw-bold">AR-RAHMOH ISLAMIC CURE & BLOOD CUPPING THERAPY LTD</span>, we are dedicated to providing holistic health solutions that harness the power of nature. Below are few lists of our services:</p>
                    <div className="d-flex flex-column services-wrapper">
                        <h5 className="fw-bold fs-5 headers">Our Top Services</h5>
                        <div className="p-3 pb-5 position-relative services-list">
                            <div className="service">
                                <div>
                                    <strong>Authentic Hijama Therapy:</strong> A sacred healing art refined for modern wellness, our authentic Hijama therapy provides a safe, clinical approach to systemic detoxification and physical recovery. Using sterile techniques and precise cupping methods.
                                </div>
                                <div className="benefits">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li>
                                            <span className="checkmarks">✓</span>
                                            Effectively draws out stagnant blood and metabolic waste.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Naturally alleviates tension, migraines, and joint discomfort.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Stimulates body's defensive response & enhances circulation.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="service">
                                <div>
                                    <strong>Bee Venom Injection:</strong> Our Bee Venom Injection utilizes a precise, clinical approach to apitherapy, harnessing the potent anti-inflammatory properties of natural melittin. This is designed to stimulate the immune system, alleviate chronic joint pain, & support systemic healing.
                                </div>
                                <div className="benefits">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Targeted relief for chronic joint pain and inflammation.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Manages Immune system stimulation for enhanced overall wellness.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Natural support for systemic healing and recovery.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="service">
                                <div>
                                    <strong>Sauna Steaming:</strong> Our Sauna Steaming sessions are designed to open pores, flush out deep-seated toxins, and promote intense physical relaxation. This therapeutic heat treatment works in perfect harmony with our Hijama and herbal services to rejuvenate the skin and soothe the nervous system.
                                </div>
                                <div className="benefits">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Induces deep sweating to effectively flush out heavy metals and impurities.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Improves cardiovascular flow and speeds up the recovery of tired muscles and joints.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Promotes the release of endorphins, naturally reducing cortisol levels.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="service">
                                <div>
                                    <strong>Arteracare:</strong> Arteracare is our specialized herbal formulation designed to support the integrity of the vascular system and promote optimal blood flow. By combining traditional botanical wisdom with modern wellness standards, this treatment aids in maintaining healthy arteries and supporting overall heart vitality.
                                </div>
                                <div className="benefits">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Formulated to support the natural resilience and health of arterial walls.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Helps body maintain efficient blood flow, oxygen and vital nutrients reach every organ.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span> 
                                            Supports overall heart vitality and healthy cholesterol levels and more.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <span className="position-absolute bottom-0 start-50 translate-middle-x pb-2 more-service">And many more..!</span>
                        </div>

                        <h5 className="fw-bold fs-5 mt-3 headers">Other Services</h5>
                        <div className="p-3 services-list">
                            <div className="service"><strong>Personalized Herbal Consultations:</strong> Our Personalized Herbal Consultations offer a one-on-one diagnostic experience where our experts analyze your unique health profile.</div>

                            <div className="service"><strong>Natural Product Sales:</strong> We offer a wide range of high-quality herbal products, including supplements, teas, and tinctures, all crafted from natural ingredients.</div>

                            <div className="service"><strong>Health Workshops and Seminars:</strong> We host regular workshops and seminars to educate our community about the benefits of herbal medicine and how to incorporate it into their daily lives.</div>

                            <div className="service"    ><strong>Online Support and Guidance:</strong> Our team is available online to provide support and guidance for your herbal health journey, ensuring you have access to the information and resources needed.</div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center text-center py-3 px-3 c-t-a">
                    <p className="p-0">Experience the healing power of nature with <span className="fw-bold">Ar-Rahmoh Islamic Cure</span>, Schedule an Appointment for Consultation. "Your health and well-being, our top priorities."</p>
                    <Link to="/contact#appointment" className="btn cta-btn" >Schedule Appointment</Link>
                </div>

            </section>
        </>
    )
}