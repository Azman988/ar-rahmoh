// import './Feedback.css';

// export function Feedback({home}) {
//     return (
//         <section className='py-4 comment-section'>
//             <h5 className='text-center comments-header'>
//                 {home ? "Client's Comments" : "Top Feedbacks"}
//             </h5>
//             <div className='d-flex flex-column flex-md-row align-items-stretch gap-3 px-4'>
//                 <div className='comment-div'>
//                     <div>
//                         <h6>Mr Yussuf</h6>
//                         <span className='ratings'>★★★★★</span>
//                     </div>
                    
//                     <div className='comment'>
//                         "Alhamdullilah and thanks to Ar Rahmah Islamic Cure and Blood Cupping Therapy for the exceptional treatment I recieved from them. With the combination of their Hijamah, Sauna and bee venom therapy, my healthy self was replaced. Their service was handled with professionalism and care for my well-being."
//                     </div>
//                 </div>
//                 <div className='comment-div'>
//                     <div>
//                         <h6>Mrs Ruqoyah</h6>
//                         <span className='ratings'>★★★★★</span>
//                     </div>
                    
//                     <div className='comment'>
//                         "Ar Rahmah Islamic Cure and Blood Cupping Therapy is such a great blessing, There Fibriod Shrinker medication is really working, the fibriod particles are just urinated like nothing. May Allah bless your company more and more"
//                     </div>
//                 </div>
//                 <div className='comment-div'>
//                     <div>
//                         <h6>Alfa Usman</h6>
//                         <span className='ratings'>★★★★★</span>
//                     </div>
                    
//                     <div className='comment'>
//                         "Jedi Jedi is nobody's mate, At Ar-rahmah islamic cure and blood cupping you're confirm. May Allah never let you short of His mercy and blessings. The Agbo Jedi is really great, like i never experience the pain. I'll insha Allah recommend more customers for you."
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

import React from 'react';
import './Feedback.css';
import { Quote } from 'lucide-react'; // Premium visual anchor icon

export function Feedback({ home }) {
    // Arrayized data to facilitate flawless mapping duplicates for infinite loop
    const reviews = [
        {
            name: "Mr. Yussuf",
            comment: "Alhamdulillah and thanks to Ar-Rahmah Islamic Cure & Blood Cupping Therapy for the exceptional treatment I received. With the combination of their Hijamah, Sauna, and bee venom therapy, my health was completely restored. Their services are handled with ultimate professionalism and genuine care.",
            accent: "success"
        },
        {
            name: "Mrs. Ruqoyah",
            comment: "Ar-Rahmah Islamic Cure & Blood Cupping Therapy is truly a great blessing! Their Fibroid Shrinker medication is highly effective—the fibroid particles pass seamlessly during urination without any pain. May Allah continue to bless your company abundantly.",
            accent: "warning"
        },
        {
            name: "Alfa Usman",
            comment: "Severe back pain and pile (Jedi Jedi) are no matches for the expertise here. At Ar-Rahmah, recovery is guaranteed. Their Agbo Jedi herbal remedy is phenomenal; I felt no pain. Insha'Allah, I will confidently recommend their services to many more customers.",
            accent: "info"
        }
    ];

    // Double the array elements to ensure visual seamlessness during infinite loop reset
    const marqueeItems = [...reviews, ...reviews, ...reviews];

    return (
        <section className='py-5 feedback-section bg-light-subtle overflow-hidden'>
            <div className='container p-0 mb-4 text-center'>
                <span className="text-success fw-bold text-uppercase fs-7 tracking-wider mb-1 d-block">Testimonials</span>
                <h2 className='fw-extrabold text-dark-emerald comment-title px-3'>
                    {home ? "Client's Comments" : "Top Feedbacks"}
                </h2>
                <p className="text-muted fs-6 max-w-600 mx-auto px-3">
                    Discover genuine transformation journeys shared by real people who experienced holistic healing through our treatments.
                </p>
            </div>

            {/* Marquee Wrapper Track Container */}
            <div className="marquee-wrapper position-relative w-100 d-flex overflow-hidden py-3">
                {/* Visual fading gradient overlays on edges for premium aesthetic */}
                <div className="marquee-fade-left d-none d-md-block position-absolute start-0 top-0 bottom-0 z-index-2"></div>
                <div className="marquee-fade-right d-none d-md-block position-absolute end-0 top-0 bottom-0 z-index-2"></div>

                <div className="marquee-track d-flex gap-4 align-items-stretch">
                    {marqueeItems.map((item, index) => (
                        <div key={index} className='modern-feedback-card p-4 d-flex flex-column justify-content-between rounded-4 shadow-sm bg-white border border-light-dark'>
                            <div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <h6 className="fw-bold text-dark-emerald mb-1">{item.name}</h6>
                                        <div className="ratings-stars fs-6 text-warning">★★★★★</div>
                                    </div>
                                    <div className={`quote-badge text-${item.accent} bg-${item.accent}-subtle p-2 rounded-3`}>
                                        <Quote size={18} fill="currentColor" className="opacity-75" />
                                    </div>
                                </div>
                                <p className='card-comment text-muted fs-7 mb-0 lh-base text-start italic-style'>
                                    "{item.comment}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
