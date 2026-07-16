import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
    CheckCircle2,
    Droplets,
    Activity,
    Sparkles,
    ShieldPlus,
    Layers,
    ShoppingBag,
    CalendarCheck,
    GraduationCap
} from 'lucide-react';
import './Service.css';
import { PromoModal } from './SeminarModal/SeminarModal';

export function Service() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Seminal Modal */}
            {isOpen && <PromoModal isOpen={isOpen} setIsOpen={setIsOpen} />}

            {/* Services Section */}
            <section className="services-page-section bg-light-subtle pb-5">
                {/* Page Hero Banner Overlay */}
                <div className="position-relative overflow-hidden services-hero-banner mb-5">
                    <img
                        src="./services.webp"
                        alt="Our Services"
                        className="w-100 img-fluid hero-bg-img"
                    />
                    <div className="position-absolute top-0 start-0 end-0 bottom-0 banner-gradient-overlay d-flex align-items-center justify-content-center">
                        <h1 className="text-white fw-extrabold text-uppercase tracking-wider display-5 text-center px-3">
                            Our Services
                        </h1>
                    </div>
                </div>

                <div className="container-fluid container-max">
                    {/* Introduction Summary Block */}
                    <div className="text-center px-xl-5 mb-5 mx-auto max-w-800">
                        <span className="text-success fw-bold text-uppercase fs-7 tracking-wider mb-2 d-block">
                            Holistic Healthcare Excellence
                        </span>
                        <p className="fs-6 text-dark-emerald fw-medium lh-base mb-0">
                            <span className="fw-extrabold text-success">AR-RAHMOH ISLAMIC CURE & BLOOD CUPPING THERAPY LTD</span> offers a wide range of traditional and modern therapeutic services that align with Islamic principles.
                        </p>
                    </div>

                    {/* --- Core Services Catalog Grid --- */}
                    <div className="mb-5">
                        <div className="d-flex align-items-center gap-2 mb-4 pb-2 border-bottom border-light-dark">
                            <ShieldPlus className="text-success flex-shrink-0" size={24} />
                            <h3 className="fw-extrabold text-dark-emerald mb-0 fs-4">Our Core Services</h3>
                        </div>

                        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">

                            {/* Service 1: Hijama */}
                            <div className="col">
                                <div className="service-premium-card h-100 p-4 rounded-4 shadow-sm bg-white border border-light-dark d-flex flex-column justify-content-between">
                                    <div className="mb-4">
                                        <div className="icon-badge-box text-success bg-success-subtle p-2 rounded-3 mb-3 d-inline-flex">
                                            <Droplets size={22} />
                                        </div>
                                        <h4 className="fw-bold text-dark-emerald fs-5 mb-2">Authentic Hijama Therapy</h4>
                                        <p className="text-muted fs-7 lh-base mb-0">
                                            A sacred healing art refined for modern wellness. Our authentic Hijama therapy provides a safe, clinical approach to systemic detoxification and physical recovery using sterile techniques and precise cupping methods.
                                        </p>
                                    </div>
                                    <div className="benefits-list-box pt-3 border-top border-light-dark">
                                        <h6 className="fw-bold text-dark-emerald mb-2 fs-7 text-uppercase tracking-wide">Key Benefits:</h6>
                                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-success mt-1 flex-shrink-0" />
                                                <span>Effectively draws out stagnant blood and metabolic waste.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-success mt-1 flex-shrink-0" />
                                                <span>Naturally alleviates tension, migraines, and joint discomfort.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-success mt-1 flex-shrink-0" />
                                                <span>Stimulates body's defensive response & enhances circulation.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Service 2: Bee Venom */}
                            <div className="col">
                                <div className="service-premium-card h-100 p-4 rounded-4 shadow-sm bg-white border border-light-dark d-flex flex-column justify-content-between">
                                    <div className="mb-4">
                                        <div className="icon-badge-box text-warning bg-warning-subtle p-2 rounded-3 mb-3 d-inline-flex">
                                            <Activity size={22} />
                                        </div>
                                        <h4 className="fw-bold text-dark-emerald fs-5 mb-2">Bee Venom Injection</h4>
                                        <p className="text-muted fs-7 lh-base mb-0">
                                            Our Bee Venom Injection utilizes a precise, clinical approach to apitherapy, harnessing the potent anti-inflammatory properties of natural melittin. Designed to stimulate the immune system and support healing.
                                        </p>
                                    </div>
                                    <div className="benefits-list-box pt-3 border-top border-light-dark">
                                        <h6 className="fw-bold text-dark-emerald mb-2 fs-7 text-uppercase tracking-wide">Key Benefits:</h6>
                                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-warning mt-1 flex-shrink-0" />
                                                <span>Targeted relief for chronic joint pain and inflammation.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-warning mt-1 flex-shrink-0" />
                                                <span>Manages Immune system stimulation for enhanced overall wellness.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-warning mt-1 flex-shrink-0" />
                                                <span>Natural support for systemic healing and recovery.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Service 3: Sauna Steaming */}
                            <div className="col">
                                <div className="service-premium-card h-100 p-4 rounded-4 shadow-sm bg-white border border-light-dark d-flex flex-column justify-content-between">
                                    <div className="mb-4">
                                        <div className="icon-badge-box text-danger bg-danger-subtle p-2 rounded-3 mb-3 d-inline-flex">
                                            <Sparkles size={22} />
                                        </div>
                                        <h4 className="fw-bold text-dark-emerald fs-5 mb-2">Sauna Steaming</h4>
                                        <p className="text-muted fs-7 lh-base mb-0">
                                            Sessions are designed to open pores, flush out deep-seated toxins, and promote intense physical relaxation. Works in perfect harmony with our Hijama and herbal services to soothe the nervous system.
                                        </p>
                                    </div>
                                    <div className="benefits-list-box pt-3 border-top border-light-dark">
                                        <h6 className="fw-bold text-dark-emerald mb-2 fs-7 text-uppercase tracking-wide">Key Benefits:</h6>
                                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-danger mt-1 flex-shrink-0" />
                                                <span>Effectively flush out heavy metals and impurities.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-danger mt-1 flex-shrink-0" />
                                                <span>Improves cardiovascular flow and replenishes tired muscles.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-danger mt-1 flex-shrink-0" />
                                                <span>Promotes release of endorphins, reducing cortisol levels.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Service 4: Arteracare */}
                            <div className="col">
                                <div className="service-premium-card h-100 p-4 rounded-4 shadow-sm bg-white border border-light-dark d-flex flex-column justify-content-between">
                                    <div className="mb-4">
                                        <div className="icon-badge-box text-info bg-info-subtle p-2 rounded-3 mb-3 d-inline-flex">
                                            <Activity size={22} />
                                        </div>
                                        <h4 className="fw-bold text-dark-emerald fs-5 mb-2">Arteracare</h4>
                                        <p className="text-muted fs-7 lh-base mb-0">
                                            Our Arteracare Advanced Therapy offers a sophisticated approach to wellness. By blending traditional wisdom with modern precision, we provide a restorative experience designed to help reclaim vitality.
                                        </p>
                                    </div>
                                    <div className="benefits-list-box pt-3 border-top border-light-dark">
                                        <h6 className="fw-bold text-dark-emerald mb-2 fs-7 text-uppercase tracking-wide">Key Benefits:</h6>
                                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-info mt-1 flex-shrink-0" />
                                                <span>Effectively mitigates chronic discomfort and acute pain.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-info mt-1 flex-shrink-0" />
                                                <span>Helps body maintain efficient blood flow and cell repair.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-info mt-1 flex-shrink-0" />
                                                <span>Helps break down stubborn scar tissue and muscle adhesions.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Services */}
                            <div className="col">
                                <div className="service-premium-card h-100 p-4 rounded-4 shadow-sm bg-white border border-light-dark d-flex flex-column justify-content-between">
                                    <div className="mb-4">
                                        <div className="icon-badge-box text-dark bg-light p-2 rounded-3 mb-3 d-inline-flex">
                                            <Layers size={22} />
                                        </div>
                                        <h4 className="fw-bold text-dark-emerald fs-5 mb-2">Additional Services</h4>
                                        <p className="text-muted fs-7 lh-base mb-0">
                                            In addition to core therapies, we offer complementary services to enhance your wellness journey. These include personalized herbal consultations, nutritional guidance, and lifestyle coaching.
                                        </p>
                                    </div>
                                    <div className="benefits-list-box pt-3 border-top border-light-dark">
                                        <h6 className="fw-bold text-dark-emerald mb-2 fs-7 text-uppercase tracking-wide">Key Benefits:</h6>
                                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-success mt-1 flex-shrink-0" />
                                                <span>Opportunity to have a personalized treatment plan.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-success mt-1 flex-shrink-0" />
                                                <span>Access to expert advice on remedies and adjustments.</span>
                                            </li>
                                            <li className="d-flex align-items-start gap-2 fs-7 text-muted">
                                                <CheckCircle2 size={15} className="text-success mt-1 flex-shrink-0" />
                                                <span>Opportunity to have a documented treatment history.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- Auxiliary Services Group --- */}
                    <div className="py-4 my-5 px-4 rounded-4 secondary-offers-section border border-light-dark shadow-sm bg-body-tertiary">
                        <h5 className="fw-bold text-dark-emerald mb-4 tracking-wide text-center text-sm-start text-uppercase fs-7">We also offer</h5>
                        <div className="row g-3">

                            <div className="col-12 col-md-6">
                                <div className="d-flex gap-3 align-items-start p-3 rounded-3 bg-white border border-light-dark h-100">
                                    <div className="text-success p-2 rounded-2 bg-success-subtle flex-shrink-0">
                                        <ShoppingBag size={18} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark-emerald fs-6 mb-1">Natural Product Sales</h5>
                                        <p className="text-muted fs-7 lh-base mb-2">
                                            We offer a wide range of high-quality medical products, including herbs, teas, tinctures, cosmetics, and dietetics, all crafted from natural ingredients.
                                        </p>
                                        <Link to="/product" className="fw-semibold text-success fs-7 text-decoration-none">
                                            Shop here &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="d-flex gap-3 align-items-start p-3 rounded-3 bg-white border border-light-dark h-100">
                                    <div className="text-success p-2 rounded-2 bg-success-subtle flex-shrink-0">
                                        <GraduationCap size={18} />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark-emerald fs-6 mb-1">Health Workshops and Seminars</h5>
                                        <p className="text-muted fs-7 lh-base mb-2">
                                            We host regular workshops and seminars to educate our community about the benefits of herbal medicine and how to incorporate it into daily life.
                                        </p>
                                        <button onClick={() => setIsOpen(true)} className="btn p-0 fw-semibold text-success fs-7 text-decoration-none">
                                            Know more &rarr;
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* --- Final Call to Action --- */}
                    <div className="services-cta-banner p-4 p-md-5 rounded-4 text-center text-white position-relative overflow-hidden shadow mt-5">
                        <div className="cta-pattern-mask position-absolute top-0 start-0 end-0 bottom-0 opacity-10"></div>
                        <div className="position-relative z-index-2 max-w-700 mx-auto">
                            <p className="text-white-90 fs-6 fw-light lh-base mb-4">
                                Experience the healing power of nature with <span className="fw-bold text-white">Ar-Rahmoh Islamic Cure.</span> To book any of our core services, schedule an Appointment for Consultation by clicking the button below.
                            </p>
                            <HashLink
                                smooth
                                to="/contact#appointment"
                                className="btn btn-light-cta px-4 py-2 rounded-3 shadow-sm"
                            >
                                <CalendarCheck size={18} /> Schedule Appointment
                            </HashLink>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
