import WhatsAppOrderBtn from "./WhatsappBtn/WhatsappBtn";
import './Contact.css';

export const Contact = () => {
    return (
        <section className=" contact-page">
            <div>
                <img src="./contact.webp" alt="Contact" className="mb-2 w-100 img-fluid" style={{ height: '105px', objectFit: 'cover' }} />
            </div>
            <div className="p-md-4 py-4 d-flex flex-column flex-md-row align-items-start justify-content-center gap-4">
                <div className="d-flex flex-column align-items-center justify-content-center location-container">
                    <h5 className="mb-3 fw-bold">Visit Us</h5>
                    <p className="text-center">Our physical locations are open for consultations and treatments. We welcome you to come and experience our services in person. Locations & Contacts below:</p>
                    <div className="d-flex align-items-start justify-content-center gap-md-5 gap-3 flex-wrap contact-locations">
                        <div className="headOfficeWrapper">
                            <h6>
                                Our Head Office:
                            </h6>
                            <ul className="contact-details list-unstyled ms-3">
                                <li>
                                    <span><i className="fa-solid fa-location-dot"></i> </span> 
                                    Iwo, Osun State.
                                </li>
                                <li>
                                    <span><i className="fa-solid fa-phone"></i> </span>
                                    <a href="tel:09046088723">0904 608 8723</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6>
                                Branches:
                            </h6>
                            <ul className="contact-details list-unstyled ms-3">
                                <li>
                                    <div className="fw-bold">Ilorin Branches:</div>
                                    <div className="d-flex flex-column gap-1 ms-3">
                                        <ul>
                                            <li>
                                                <span><i className="fa-solid fa-location-dot"></i> </span> 
                                                Agbo Oba 
                                            </li>
                                            <li className="mb-2">
                                                <span><i className="fa-solid fa-phone"></i> </span>
                                                <a href="tel:09138501625">0913 850 1625</a>
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-location-dot"></i> </span> 
                                                Kwara Poly 
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-phone"></i> </span> 
                                                <a href="tel:09011073509">0901 107 3509</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div><span className="fw-bold">Ogun state Branch:</span> 
                                        <ul className="ms-3">
                                            <li>
                                                <span><i className="fa-solid fa-location-dot"></i> </span> Abeokuta 
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-phone"></i> </span> 
                                                <a href="tel:07048572640">0704 857 2640</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div><span className="fw-bold">Lagos state Branch:</span> 
                                        <ul className="ms-3">
                                            <li>
                                                <span><i className="fa-solid fa-location-dot"></i> </span> Ikorodu 
                                            </li>
                                            <li>
                                                <span><i className="fa-solid fa-phone"></i> </span> 
                                                <a href="tel:08103226944">0810 322 6944</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="mb-0 mt-2 text-center hours">Operating Hours: Mon - Sat, 9:00AM - 5:00PM</p>
                </div>

                <div className="d-flex flex-column gap-4" >
                    <div className="text-center support-container" id="support">
                        <h5>Support</h5>
                        <p>Have any question about our services, products or know more about who we are? Contact support via the link below.</p>
                        <div className="w-100 d-flex align-items-center justify-content-center">
                            <a href={`https://wa.me/2349075511763??text=${encodeURIComponent("Hello, Pls I need support..")}`} rel="noopener noreferrer"  target='_blank' className="btn btn-outline-success d-flex align-items-center px-3 py-2 ">
                                <i className="fab fa-whatsapp fs-5 me-2"></i> Support
                            </a>
                        </div>
                        
                    </div>

                    <div className="d-flex flex-column align-items-center justify-content-center gap-2 text-center appointment-container" id="appointment">
                        <h5 className="mb-3 fw-bold fs-5">Schedule an Appointment</h5>
                        <div className="d-flex flex-column align-items-center gap-3">
                            <div style={{fontFamily: 'Exo', fontSize: 15}}>
                                Schedule an appointment with our Specialist<span className="fw-bold"> (C.E.O)</span> to discuss your health concerns and receive personalized care.
                                To book an appointment, please click link <a href="tel:08140715269">Place Call</a> to call or use the WhatsApp button below to send a message. We look forward to assisting you on your wellness journey.
                            </div>
                            <WhatsAppOrderBtn productName={null} />
                            <div className="text-start caution">
                                <span className="fw-bold">Note!</span> Our specialist is available for in-person consultations at our head office only on <span className="fw-bold">Thurs, Fri & Sat</span> every week. Please ensure to schedule your appointment in advance to secure your preferred time slot.
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};