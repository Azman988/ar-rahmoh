// import { Link } from "react-router";
// import { HashLink } from "react-router-hash-link";
// import './About.css'
// import { Feedback } from "./Feedback/Feedback";

// export const About = () => {
//     return (
//         <section className="about">
//             <div>
//                 <img src="./about-us.webp" alt="About Us" className="w-100 img-fluid" style={{ height: '100px', objectFit: 'cover' }} />
//             </div>
//             <div className="text-center mb-1 fw-bold fs-6 px-3 intro">
//                 Learn more about <span>AR-RAHMOH ISLAMIC CURE & BLOOD CUPPING THERAPY LTD </span> and our mission to provide holistic health solutions.
//             </div>

//             <div className="about-container">
//                 <div className="pt-4 pb-2 content-wrapper">
//                     <div className="d-flex flex-column flex-md-row align-items-start justify-content-center gap-3 px-4">
//                         <div className="d-flex flex-column align-items-center justify-content-center gap-md-0 gap-3">
//                             <div>
//                                 <h5 className="headers">Our Story:</h5>
//                                 <p className="descriptions"><span className="fw-bold">Ar-Rahmoh Islamic Cure & Blood Cupping Therapy Ltd</span> was founded with a vision to bring the healing power of nature to everyone. We are passionate about creating high-quality herbal products and services that promote wellness and balance in human body.</p>
//                             </div>

//                             <div>
//                                 <h5 className="headers">Our Mission:</h5>
//                                 <p className="descriptions">Our mission is to provide long term used & Islamic recommended natural and effective with modern health solutions that empower individuals to take control of their well-being. We are committed to using sustainable practices and sourcing the finest ingredients to ensure the highest quality products for our customers.</p>
//                             </div>
//                         </div>

//                         <div className="col-md-6">
//                             <h5 className="headers">Our Values:</h5>
//                             <div className="d-flex flex-column gap-2 border-0 values-list descriptions">
//                                 <div>
//                                     <span className="fw-bold me-1">✓</span>
//                                     <div>
//                                         <strong>Quality:</strong> We prioritize quality in every aspect of our business, from sourcing ingredients to manufacturing and customer services.
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <span className="fw-bold me-1">✓</span>
//                                     <div>
//                                         <strong>Integrity:</strong> We operate with honesty and transparency, building trust with our customers, communities and partners.
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <span className="fw-bold me-1">✓</span>
//                                     <div>
//                                         <strong>Sustainability:</strong> We are dedicated to minimizing our environmental impact and promoting sustainable practices in all areas of our business.
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <span className="fw-bold me-1">✓</span>
//                                     <div>
//                                         <strong>Customer Focus:</strong> We are committed to providing exceptional customer service and ensuring our customers' satisfaction with our products.
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-md-4 gap-3 mt-4 px-4">
//                         <div>
//                             <h5 className="headers">Certification:</h5>
//                             <p className="descriptions">
//                                 We are proud to be certified by multiple regulatory bodies, including the <span>Federal Ministry of Health (FMOH)</span>, <span>Osun State Traditional Medicine Board (OSTMB)</span>, <span>Islamic and Prophetic Medicine Practitioners Association of Nigeria (IPMPAN)</span> & <span>National Association of Nigeria Traditional Medicine Practitioners (NANTMP)</span>, ensuring that our products and services meet the highest standards of safety and quality.
//                             </p>
//                         </div>

//                         <div>
//                             <h5 className="headers">Our Team:</h5>
//                             <p className="descriptions">
//                                 Our team is made up of passionate individuals who are dedicated to creating products and services that make positive impacts on people's lives. From our herbalists and researchers to our customer service representatives, we work together to ensure that every aspect of our business reflects our commitment to excellence.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="text-center w-100 license">
//                         <h5 className="headers">License:</h5> 
//                         <p className="description">Ar-Rahmoh Islamic Cure and Blood Cupping Therapy Ltd is registered with the Corporate Affiars Commission (CAC) with <span className="rc-code">RC.6882869</span></p>
//                     </div>
//                 </div>
//             </div>

//             <Feedback home={false} />

//             <div className="d-flex flex-column align-items-center justify-content-center text-center c-t-a">
//                 <h5 className="mb-3">Contact Us</h5>
//                 <p className="cta">If you have any questions, feedback, or inquiries about our products and services, please don't hesitate to contact us. We are here to help and support you on your wellness journey.</p>
//                 <HashLink to="/contact#appointment" className="btn cta-btn">Get in Touch</HashLink>
//             </div>
//         </section>
//     );
// };




import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { 
    CheckCircle2, 
    BookOpen, 
    Target, 
    HeartHandshake, 
    Award, 
    Users, 
    FileText, 
    Mail 
} from 'lucide-react';
import { Feedback } from "./Feedback/Feedback";
import './About.css';

export const About = () => {
    return (
        <section className="about-page bg-light-subtle pb-5">
            {/* Premium Overlay Page Hero */}
            <div className="position-relative overflow-hidden about-hero-banner mb-5">
                <img 
                    src="./about-us.webp"
                    alt="About Us Banner" 
                    className="w-100 img-fluid about-hero-img" 
                />
                <div className="position-absolute top-0 start-0 end-0 bottom-0 about-overlay d-flex align-items-center justify-content-center">
                    <h1 className="text-white fw-extrabold text-uppercase tracking-wider display-5 text-center px-3">
                        About Our Clinic
                    </h1>
                </div>
            </div>

            <div className="container-fluid container-max">
                {/* Brand Intro Tagline */}
                <div className="text-center px-xl-5 mb-5 mx-auto max-w-800">
                    <span className="text-success fw-bold text-uppercase fs-7 tracking-wider mb-2 d-block">
                        Who We Are
                    </span>
                    <p className="fs-6 text-dark-emerald fw-medium lh-base mb-0">
                        Learn more about <span className="fw-extrabold text-success">AR-RAHMOH ISLAMIC CURE & BLOOD CUPPING THERAPY LTD</span> and our deep commitment to providing high-quality, prophetic holistic healthcare solutions.
                    </p>
                </div>

                                {/* Main Story & Mission Blocks */}
                <div className="row g-4 mb-5">
                    <div className="col-12 col-lg-6">
                        <div className="d-flex flex-column gap-4 h-100">
                            
                            {/* Our Story */}
                            <div className="about-info-card p-4 rounded-4 shadow-sm bg-white border border-light-dark h-100">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <BookOpen className="text-success" size={22} />
                                    <h4 className="fw-bold text-dark-emerald fs-5 mb-0">Our Story</h4>
                                </div>
                                <p className="text-muted fs-6 lh-base mb-0">
                                    <span className="fw-bold text-success">Ar-Rahmoh Islamic Cure & Blood Cupping Therapy Ltd</span> was founded with a dedicated vision to deliver the clean therapeutic energy of holistic medicine directly to our community. We are deeply passionate about providing high-standard herbal products and professional clinical practices that promote balanced physical health and cellular recovery.
                                </p>
                            </div>

                            {/* Our Mission */}
                            <div className="about-info-card p-4 rounded-4 shadow-sm bg-white border border-light-dark h-100">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <Target className="text-success" size={22} />
                                    <h4 className="fw-bold text-dark-emerald fs-5 mb-0">Our Mission</h4>
                                </div>
                                <p className="text-muted fs-6 lh-base mb-0">
                                    Our core mission is to render time-honored, Islamic-recommended natural remedies alongside modern therapeutic solutions that empower families to take complete charge of their health. We are committed to ethical manufacturing frameworks and sourcing the finest natural ingredients to guarantee premium products.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Our Values Side Column */}
                    <div className="col-12 col-lg-6">
                        <div className="about-info-card p-4 rounded-4 shadow-sm bg-white border border-light-dark h-100">
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <HeartHandshake className="text-success" size={22} />
                                <h4 className="fw-bold text-dark-emerald fs-5 mb-0">Our Core Values</h4>
                            </div>
                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex align-items-start gap-2 fs-6 text-muted">
                                    <CheckCircle2 size={18} className="text-success mt-1 flex-shrink-0" />
                                    <div><strong className="text-dark-emerald">Quality:</strong> We prioritize absolute purity across every asset layer of our operations, from ingredient sourcing to processing and supportive customer care metrics.</div>
                                </div>
                                <div className="d-flex align-items-start gap-2 fs-6 text-muted">
                                    <CheckCircle2 size={18} className="text-success mt-1 flex-shrink-0" />
                                    <div><strong className="text-dark-emerald">Integrity:</strong> We operate with comprehensive transparency, constructing verified bonds of trust with our patients, local communities, and regulatory partners.</div>
                                </div>
                                <div className="d-flex align-items-start gap-2 fs-6 text-muted">
                                    <CheckCircle2 size={18} className="text-success mt-1 flex-shrink-0" />
                                    <div><strong className="text-dark-emerald">Sustainability:</strong> We remain completely dedicated to minimizing our operational footprint and advocating for environmentally conscious sourcing solutions.</div>
                                </div>
                                <div className="d-flex align-items-start gap-2 fs-6 text-muted">
                                    <CheckCircle2 size={18} className="text-success mt-1 flex-shrink-0" />
                                    <div><strong className="text-dark-emerald">Patient Focus:</strong> Your physical recovery is our standard. We are driven to create helpful, personalized wellness plans to maximize patient satisfaction.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                                {/* Certification & Team Row */}
                <div className="row g-4 mb-5">
                    
                    {/* Certifications */}
                    <div className="col-12 col-md-6">
                        <div className="about-info-card p-4 rounded-4 shadow-sm bg-white border border-light-dark h-100">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <Award className="text-success" size={22} />
                                <h4 className="fw-bold text-dark-emerald fs-5 mb-0">Regulatory Certifications</h4>
                            </div>
                            <p className="text-muted fs-6 lh-base mb-0">
                                We are proud to be licensed and approved by multiple formal regulatory boards, including the <span className="fw-semibold text-success">Federal Ministry of Health (FMOH)</span>, <span className="fw-semibold text-success">Osun State Traditional Medicine Board (OSTMB)</span>, <span className="fw-semibold text-success">Islamic and Prophetic Medicine Practitioners Association of Nigeria (IPMPAN)</span>, and the <span className="fw-semibold text-success">National Association of Nigeria Traditional Medicine Practitioners (NANTMP)</span>.
                            </p>
                        </div>
                    </div>

                    {/* Our Team */}
                    <div className="col-12 col-md-6">
                        <div className="about-info-card p-4 rounded-4 shadow-sm bg-white border border-light-dark h-100">
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <Users className="text-success" size={22} />
                                <h4 className="fw-bold text-dark-emerald fs-5 mb-0">Our Expert Team</h4>
                            </div>
                            <p className="text-muted fs-6 lh-base mb-0">
                                Our medical staff is comprised of certified clinical practitioners and dedicated researchers who are passionate about bringing positive health changes to light. From our seasoned herbal formulation experts to our friendly support desk agents, we operate seamlessly to uphold our signature commitment to clinical excellence.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Verification Registration Badge */}
                <div className="text-center p-3 rounded-3 bg-success-subtle border border-success-subtle max-w-600 mx-auto mb-5 d-flex align-items-center justify-content-center gap-2">
                    <FileText size={18} className="text-success flex-shrink-0" />
                    <p className="mb-0 text-dark-emerald fs-7 fw-medium">
                        Ar-Rahmoh Islamic Cure & Blood Cupping Therapy Ltd is officially incorporated under the Corporate Affairs Commission (CAC) with Registration Number: <span className="fw-bold text-success">RC.6882869</span>
                    </p>
                </div>

            </div>

            {/* Dynamic Infinite Scroll Marquee Feedback Module */}
            <Feedback home={false} />

            {/* Premium Final Page Call To Action Banner */}
            <div className="container-fluid container-max mt-5">
                <div className="about-cta-banner p-4 p-md-5 rounded-4 text-center text-white position-relative overflow-hidden shadow">
                    <div className="about-pattern-mask position-absolute top-0 start-0 end-0 bottom-0 opacity-10"></div>
                    <div className="position-relative z-index-2 max-w-700 mx-auto">
                        <div className="d-flex justify-content-center mb-2">
                            <span className="p-2 bg-success bg-opacity-25 rounded-circle text-white d-inline-flex">
                                <Mail size={22} />
                            </span>
                        </div>
                        <h3 className="fw-extrabold display-6 mb-2">Have Inquiries? Reach Out Today</h3>
                        <p className="text-white-80 fs-6 fw-light lh-base mb-4">
                            If you have any questions, vital diagnostic feedback, or specific custom product inquiries, please feel free to connect with us. Our clinical desk is standing by to guide you through your recovery blueprint.
                        </p>
                        <HashLink 
                            smooth 
                            to="/contact#appointment" 
                            className="btn btn-light-about-cta px-4 py-2.5 fw-bold d-inline-flex align-items-center justify-content-center gap-2 rounded-3 shadow-sm"
                        >
                            Get In Touch With Us
                        </HashLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

