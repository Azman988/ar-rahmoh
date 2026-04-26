import { Link } from "react-router"
import './Service.css'

export function Service() {
    return (
        <section>
            <div>
                <img src="./services.webp" alt="Services" className="w-100 img-fluid" style={{ height: '100px', objectFit: 'cover' }} />
            </div>

            <div className="text-center px-md-5 px-3 pt-4 intro"><span className="fw-bold">AR-RAHMOH ISLAMIC CURE & BLOOD CUPPING THERAPY LTD</span> offers a wide range of traditional and modern therapeutic services that aligns with Islamic principles. Below are the lists of our services:</div>

            <div className="pt-3 service-container">
                <div className="service-inner-container">
                    <div className="p-4 d-flex flex-column align-items-center gap-3 main-services">
                        <h5 className="fw-bold core-header">
                            Our Core Services
                        </h5>
                        <div className="services-list">

                            <div className="core-service-wrap hijama-service">
                                <div className="service-wrapper service">
                                    <div>
                                        <span>Authentic Hijama Therapy:</span> A sacred healing art refined for modern wellness, our authentic Hijama therapy provides a safe, clinical approach to systemic detoxification and physical recovery. Using sterile techniques and precise cupping methods.
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
                            </div>

                            <div className="core-service-wrap bee-venom-service">
                                <div className="service-wrapper service">
                                    <div>
                                        <span>Bee Venom Injection:</span> Our Bee Venom Injection utilizes a precise, clinical approach to apitherapy, harnessing the potent anti-inflammatory properties of natural melittin. This is designed to stimulate the immune system, alleviate chronic joint pain, & support systemic healing.
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
                            </div>

                            <div className="core-service-wrap sauna-service">
                                <div className="service-wrapper service">
                                    <div>
                                        <span>Sauna Steaming:</span> Our Sauna Steaming sessions are designed to open pores, flush out deep-seated toxins, and promote intense physical relaxation. This therapeutic heat treatment works in perfect harmony with our Hijama and herbal services to rejuvenate the skin and soothe the nervous system.
                                    </div>
                                    <div className="benefits">
                                        <h6>Key Benefits:</h6>
                                        <ul>
                                            <li>
                                                <span className="checkmarks">✓</span>
                                                Effectively flush out heavy metals and impurities.
                                            </li>
                                            <li>
                                                <span className="checkmarks">✓</span>
                                                Improves cardiovascular flow and replenishes tired muscles and joints.
                                            </li>
                                            <li>
                                                <span className="checkmarks">✓</span>
                                                Promotes the release of endorphins, naturally reducing cortisol levels.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="core-service-wrap arteracare-service">
                                <div className="service-wrapper service">
                                    <div>
                                        <span>Arteracare:</span> Our Arteracare Advanced Therapy offers a sophisticated, science-backed approach to wellness. By blending traditional wisdom with modern clinical precision, we provide a restorative experience designed to help you reclaim your vitality in a serene, professional environment.
                                    </div>
                                    <div className="benefits">
                                        <h6>Key Benefits:</h6>
                                        <ul>
                                            <li>
                                                <span className="checkmarks">✓</span>
                                                Effectively mitigates chronic discomfort and acute pain.
                                            </li>
                                            <li>
                                                <span className="checkmarks">✓</span>
                                                Helps body maintain efficient blood flow and stimulate cellular repair.
                                            </li>
                                            <li>
                                                <span className="checkmarks">✓</span>
                                                Helps break down stubborn scar tissue and muscle adhesions and more.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="core-service-wrap additional-services">
                            <div className="service-wrapper service">
                                <div>
                                    <span>Additional Services:</span> In addition to our core therapies, we also offer a range of complementary services to enhance your wellness journey. These include personalized herbal consultations, nutritional guidance, and lifestyle coaching, all designed to support your holistic health and well-being.
                                </div>
                                <div className="benefits">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li>
                                            <span className="checkmarks">✓</span>
                                            Opportunity to have a personalized treatment plan.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span>
                                            Access to expert advice on natural remedies and lifestyle adjustments.
                                        </li>
                                        <li>
                                            <span className="checkmarks">✓</span>
                                            Opportunity to have a documented treatment history.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h5 className="fw-bold mt-3 others-header">We also offer</h5>
                    <div className="p-3 services-list">
                        <div className="service"><span>Natural Product Sales:</span> We offer a wide range of high-quality herbal products, including dietetics, teas, and tinctures, all crafted from natural ingredients.</div>

                        <div className="service"><span>Health Workshops and Seminars:</span> We host regular workshops and seminars to educate our community about the benefits of herbal medicine and how to incorporate it into their daily lives.</div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center text-center py-3 px-3 c-t-a">
                <p className="p-0">Experience the healing power of nature with <span className="fw-bold">Ar-Rahmoh Islamic Cure.</span> To book any of our services, schedule an Appointment for Consultation by clicking the button below. 
                "Your health and well-being, our top priorities."</p>
                <Link to="/contact" className="btn cta-btn" >Schedule Appointment</Link>
            </div>

        </section>
    )
}