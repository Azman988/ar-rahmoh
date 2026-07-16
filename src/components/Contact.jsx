import React from 'react';
import { MapPin, Phone, Clock, MessageSquareCode, CalendarDays, AlertTriangle } from 'lucide-react';
import WhatsAppOrderBtn from "./WhatsappBtn/WhatsappBtn";
import './Contact.css';

export const Contact = () => {
    return (
        <section className="contact-page bg-light-subtle pb-5">
            {/* Professional Overlay Page Hero Banner */}
            <div className="position-relative overflow-hidden contact-hero-banner mb-5">
                <img
                    src="./contact.webp"
                    alt="Contact Us"
                    className="w-100 img-fluid contact-hero-img"
                />
                <div className="position-absolute top-0 start-0 end-0 bottom-0 contact-overlay d-flex align-items-center justify-content-center">
                    <h1 className="text-white fw-extrabold text-uppercase tracking-wider display-5 text-center px-3">
                        Contact Our Clinics
                    </h1>
                </div>
            </div>

            <div className="container-fluid container-max">
                <div className="row g-4 align-items-start">

                    {/* Left Column: Physical Clinic Locations */}
                    <div className="col-12 col-lg-7">
                        <div className="clinic-location-card p-4 rounded-4 shadow-sm bg-white border border-light-dark">
                            <div className="d-flex align-items-center gap-2 mb-3 justify-content-center justify-content-md-start">
                                <MapPin className="text-success" size={24} />
                                <h3 className="fw-extrabold text-dark-emerald mb-0 fs-4">Visit Our Branches</h3>
                            </div>
                            <p className="text-muted fs-6 lh-base mb-4 text-center text-md-start">
                                Our medical centers are fully open for physical consultations, clinical cupping, and holistic treatments. Find our structured locations and direct branch contacts below:
                            </p>

                            <div className="row g-4 border-bottom border-light-dark pb-4 mb-4">
                                {/* Head Office Box */}
                                <div className="col-12">
                                    <div className="p-3 rounded-3 head-office-accent bg-success-subtle border border-success-subtle">
                                        <h5 className="fw-bold text-dark-emerald fs-6 mb-2 text-uppercase tracking-wide">Our Head Office</h5>
                                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0 fs-7 text-muted">
                                            <li className="d-flex align-items-center gap-2">
                                                <MapPin size={16} className="text-success flex-shrink-0" />
                                                <span className="fw-medium text-dark">Iwo, Osun State, Nigeria.</span>
                                            </li>
                                            <li className="d-flex align-items-center gap-2">
                                                <Phone size={16} className="text-success flex-shrink-0" />
                                                <a href="tel:09046088723" className="text-success fw-bold text-decoration-none hover-underline">0904 608 8723</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Regional Branches Section */}
                            <h5 className="fw-bold text-dark-emerald fs-6 mb-3 text-uppercase tracking-wide text-center text-md-start">Regional Branch Network</h5>
                            <div className="row g-3">

                                {/* Ilorin Branches */}
                                <div className="col-12 col-md-6">
                                    <div className="p-3 rounded-3 bg-light border border-light-dark h-100">
                                        <h6 className="fw-bold text-dark-emerald fs-7 mb-2 border-bottom border-light-dark pb-1">Ilorin (Kwara State)</h6>
                                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0 fs-7 text-muted">
                                            <li className="fw-semibold text-dark">Branch 1: Agbo Oba</li>
                                            <li className="d-flex align-items-center gap-2 ps-2">
                                                <Phone size={14} className="text-success flex-shrink-0" />
                                                <a href="tel:09138501625" className="text-decoration-none text-muted hover-success">0913 850 1625</a>
                                            </li>
                                            <li className="fw-semibold text-dark mt-1">Branch 2: Kwara Poly Area</li>
                                            <li className="d-flex align-items-center gap-2 ps-2">
                                                <Phone size={14} className="text-success flex-shrink-0" />
                                                <a href="tel:09011073509" className="text-decoration-none text-muted hover-success">0901 107 3509</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Southern Branches */}
                                <div className="col-12 col-md-6">
                                    <div className="d-flex flex-column gap-3 h-100">
                                        {/* Ogun State */}
                                        <div className="p-3 rounded-3 bg-light border border-light-dark flex-grow-1">
                                            <h6 className="fw-bold text-dark-emerald fs-7 mb-2 border-bottom border-light-dark pb-1">Ogun State Branch</h6>
                                            <ul className="list-unstyled d-flex flex-column gap-1 mb-0 fs-7 text-muted">
                                                <li className="fw-semibold text-dark">Abeokuta</li>
                                                <li className="d-flex align-items-center gap-2 ps-1">
                                                    <Phone size={14} className="text-success flex-shrink-0" />
                                                    <a href="tel:07048572640" className="text-decoration-none text-muted hover-success">0704 857 2640</a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Lagos State */}
                                        <div className="p-3 rounded-3 bg-light border border-light-dark flex-grow-1">
                                            <h6 className="fw-bold text-dark-emerald fs-7 mb-2 border-bottom border-light-dark pb-1">Lagos State Branch</h6>
                                            <ul className="list-unstyled d-flex flex-column gap-1 mb-0 fs-7 text-muted">
                                                <li className="fw-semibold text-dark">Ikorodu</li>
                                                <li className="d-flex align-items-center gap-2 ps-1">
                                                    <Phone size={14} className="text-success flex-shrink-0" />
                                                    <a href="tel:08103226944" className="text-decoration-none text-muted hover-success">0810 322 6944</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Operating Hours Alert */}
                            <div className="mt-4 pt-3 border-top border-light-dark d-flex align-items-center justify-content-center gap-2 text-success fw-semibold fs-7 bg-success-subtle bg-opacity-25 py-2 rounded-3">
                                <Clock size={16} />
                                <span>Operating Hours: Monday – Saturday, 9:00 AM – 5:00 PM</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Support & Appointments */}
                    <div className="col-12 col-lg-5">
                        <div className="d-flex flex-column gap-4">

                            {/* Support Card Module */}
                            <div className="clinic-location-card p-4 rounded-4 shadow-sm bg-white border border-light-dark text-center" id="support">
                                <div className="icon-badge-round text-success bg-success-subtle mx-auto mb-3 d-flex align-items-center justify-content-center">
                                    <MessageSquareCode size={22} />
                                </div>
                                <h4 className="fw-bold text-dark-emerald fs-5 mb-2">Helpdesk Support</h4>
                                <p className="text-muted fs-7 lh-base mb-3 mx-auto max-w-350">
                                    Have immediate questions about our medical formulations, delivery timelines, or specific treatment inquiries? Connect directly with our helpdesk.
                                </p>
                                <a
                                    href={`https://wa.me{encodeURIComponent("Hello, please I need support regarding your clinical services.")}`}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="btn btn-outline-success border-2 fw-semibold px-4 py-2 d-inline-flex align-items-center gap-2 rounded-3 text-uppercase fs-7 tracking-wide transition-all"
                                >
                                    Chat Support
                                </a>
                            </div>

                            {/* Appointment Scheduling Module */}
                            <div className="clinic-location-card p-4 rounded-4 shadow-sm bg-white border border-light-dark text-center" id="appointment">
                                <div className="icon-badge-round text-success bg-success-subtle mx-auto mb-3 d-flex align-items-center justify-content-center">
                                    <CalendarDays size={22} />
                                </div>
                                <h4 className="fw-bold text-dark-emerald fs-5 mb-2">Schedule an Appointment</h4>
                                <p className="text-muted fs-7 lh-base mb-4">
                                    Book a one-on-one session with our Specialist <span className="fw-bold text-success">(C.E.O)</span> to discuss your health profiles and receive a custom prophetic healing blueprint. Call us or use the verified booking messenger option below.
                                </p>

                                <div className="d-flex flex-column gap-3 align-items-center">
                                    <a href="tel:08140715269" className="btn btn-success fw-bold text-white px-4 py-2.5 rounded-3 w-100 shadow-sm transition-all fs-7 text-uppercase tracking-wide">
                                        Place Voice Call Now
                                    </a>
                                    <WhatsAppOrderBtn productName={null} />
                                </div>

                                {/* Clinical Caution Disclaimer Box */}
                                <div className="mt-4 p-3 rounded-3 border border-warning-subtle bg-warning-subtle bg-opacity-25 text-start d-flex gap-2">
                                    <AlertTriangle size={18} className="text-warning flex-shrink-0 mt-0.5" />
                                    <div className="fs-7 text-muted lh-base">
                                        <strong className="text-dark">Important Note:</strong> Our head consultant is available for physical, in-person clinical sessions at the head office strictly on <strong className="text-dark">Thursdays, Fridays, and Saturdays</strong> each week. Please secure your slot early.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
