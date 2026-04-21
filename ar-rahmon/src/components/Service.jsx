import { Header } from "./Header"
import './Service.css'
import WhatsAppOrderBtn from "./WhatsappBtn"

export function Service() {
    return (
        <>
            <Header />
            <section className="pt-4">
                <h1 className="text-center py-2 fs-3">Our Services</h1>

                <div className="container-fluid">
                    <p className="text-center pb-2 px-3 intro">At <span className="fw-bold">AR-RAHMOH ISLAMIC CURE & BLOOD CUPPING THERAPY LTD</span>, we are dedicated to providing holistic health solutions that harness the power of nature. Our services include:</p>
                    <div className="d-flex flex-column services-wrapper">
                        <h4>Top Services</h4>
                        <div className="p-3 services-list">
                            <div className="bg-light py-3 px-3 service">
                                <div>
                                    <strong>Authentic Hijama Therapy:</strong> A sacred healing art refined for modern wellness, our authentic Hijama therapy provides a safe, clinical approach to systemic detoxification and physical recovery. Using sterile techniques and precise cupping methods.
                                </div>
                                <div className="benefits">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li><span className="fw-bold me-1">✓</span> Effectively draws out "stagnant" blood and metabolic waste.</li>
                                        <li><span className="fw-bold me-1">✓</span>  Naturally alleviates tension, migraines, and joint discomfort.</li>
                                        <li><span className="fw-bold me-1">✓</span> Stimulates body's defensive response & enhances circulation.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-light py-3 px-3 service">
                                <div>
                                    <strong>Bee Venom Injection:</strong> Our Bee Venom Injection utilizes a precise, clinical approach to apitherapy, harnessing the potent anti-inflammatory properties of natural melittin. This is designed to stimulate the immune system, alleviate chronic joint pain, & support systemic healing.
                                </div>
                                <div className="benefits">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li><span className="fw-bold me-1">✓</span> Targeted relief for chronic joint pain and inflammation.</li>
                                        <li><span className="fw-bold me-1">✓</span> Immune system stimulation for enhanced overall wellness.</li>
                                        <li><span className="fw-bold me-1">✓</span> Natural support for systemic healing and recovery.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-light py-3 px-3 service">
                                <div>
                                    <strong>Sauna Steaming:</strong> Our Sauna Steaming sessions are designed to open pores, flush out deep-seated toxins, and promote intense physical relaxation. This therapeutic heat treatment works in perfect harmony with our Hijama and herbal services to rejuvenate the skin and soothe the nervous system.
                                </div>
                                <div className="benefits">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li><span className="fw-bold me-1">✓</span> Induces deep sweating to effectively flush out heavy metals and impurities.</li>
                                        <li><span className="fw-bold me-1">✓</span> Improves cardiovascular flow and speeds up the recovery of tired muscles and joints.</li>
                                        <li><span className="fw-bold me-1">✓</span> Promotes the release of endorphins, naturally reducing cortisol levels.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-light py-3 px-3 service">
                                <div>
                                    <strong>Arteracare:</strong> Arteracare is our specialized herbal formulation designed to support the integrity of the vascular system and promote optimal blood flow. By combining traditional botanical wisdom with modern wellness standards, this treatment aids in maintaining healthy arteries and supporting overall heart vitality.
                                </div>
                                <div className="benefits">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li><span className="fw-bold me-1">✓</span> Formulated to support the natural resilience and health of arterial walls.</li>
                                        <li><span className="fw-bold me-1">✓</span> Helps the body maintain efficient blood flow, oxygen and vital nutrients reach every organ.</li>
                                        <li><span className="fw-bold me-1">✓</span> Supports overall heart vitality and healthy cholesterol levels.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h4>Other Services</h4>
                        <div className="p-3 services-list">
                            <div className="service"><strong>Personalized Herbal Consultations:</strong> Our Personalized Herbal Consultations offer a one-on-one diagnostic experience where our experts analyze your unique health profile.</div>

                            <div className="service"><strong>Natural Product Sales:</strong> We offer a wide range of high-quality herbal products, including supplements, teas, and tinctures, all crafted from natural ingredients.</div>

                            <div className="service"><strong>Health Workshops and Seminars:</strong> We host regular workshops and seminars to educate our community about the benefits of herbal medicine and how to incorporate it into their daily lives.</div>

                            <div className="service"    ><strong>Online Support and Guidance:</strong> Our team is available online to provide support and guidance for your herbal health journey, ensuring you have access to the information and resources you need.</div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center text-center py-3 px-3 c-t-a">
                    <p>Experience the healing power of nature with <span className="fw-bold">Ar-Rahmoh Herbal Medicine</span>. Your health and well-being are our top priorities.</p>
                    <WhatsAppOrderBtn consult={'consult'} />
                </div>

            </section>
        </>
    )
}