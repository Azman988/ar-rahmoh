import React, { useEffect } from 'react';
import { X, Calendar, Award, ArrowRight, ShieldCheck, Flame, CheckCircle2, CheckCircle, BookOpen, HeartPulse, Activity, ShieldAlert, Sparkles } from 'lucide-react';

export function PromoModal({ isOpen, setIsOpen }) {
    useEffect(() => {
        const showTimer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);

        return () => clearTimeout(showTimer);
    }, [setIsOpen]);

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    const curriculumData = [
        {
            trackTitle: "Reproductive Health & Gynecology",
            icon: <ShieldAlert size={18} className="text-danger" />,
            bgColor: "bg-danger bg-opacity-10",
            topics: [
                "Amenorrhea: Understanding menstrual absence, causes, and holistic recovery pathways",
                "Adenomyosis: Managing uterine wall inflammation and endometrial tissue distress",
                "Dysmenorrhea: Natural pain management protocols for severe menstrual cramping",
                "Stillbirth Prevention: Prenatal natural health optimization and risk reduction mapping",
                "Foetal Malposition: Holistic and positioning techniques to assist optimal fetal alignment",
                "Gonarrhoea in Pregnancy: Safeguarding maternal and fetal health against structural infections"
            ]
        },
        {
            trackTitle: "Fertility & Conception Science",
            icon: <Sparkles size={18} className="text-warning" />,
            bgColor: "bg-warning bg-opacity-10",
            topics: [
                "TTC (Trying to Conceive): Natural reproductive health and metabolic balancing keys",
                "To Conceive Twins: Exploring metabolic, dietary, and natural twin conception profiles",
                "Aspermia: Addressing male factor reproductive absence and seminal micro-nutrition",
                "Strong and Lasting Erection: Improving vital blood circulation and erectile durability naturally"
            ]
        },
        {
            trackTitle: "Breast Pathology & Disease Awareness",
            icon: <HeartPulse size={18} className="text-primary" />,
            bgColor: "bg-primary bg-opacity-10",
            topics: [
                "Breast Cancer: Early warning indicators, preventive dietetics, and cellular defense",
                "Breast Discharge: Investigating abnormal lactation, hormonal imbalances, and root causes",
                "Breast Lump: Distinguishing between benign cysts, structural changes, and fibrous growths",
                "Breast Disease: Broad-spectrum clinical natural protocols for overall mammary health"
            ]
        },
        {
            trackTitle: "Chronic Internal & Systemic Medicine",
            icon: <Activity size={18} className="text-success" />,
            bgColor: "bg-success bg-opacity-10",
            topics: [
                "Angina: Managing ischemic heart conditions and chest pain through circulatory optimization",
                "Asthma: Reducing bronchial airway hyperactivity using natural respiratory therapeutics",
                "Diabetes: Reversing insulin resistance and stabilizing blood glucose parameters",
                "Cirrhosis of the Liver: Hepatic tissue protection, detoxification, and regeneration support",
                "Kidney Failure: Renal preservation strategies, waste filtration support, and preventative care",
                "Sickle Cell Disease: Natural management strategies for crisis mitigation and pain alleviation"
            ]
        },
        {
            trackTitle: "Gastrointestinal & Metabolic Health",
            icon: <Activity size={18} className="text-warning" />,
            bgColor: "bg-warning bg-opacity-10",
            topics: [
                "Appendicitis: Early clinical detection, inflammatory markers, and preventative natural protocols",
                "Ascites: Managing peritoneal fluid retention and abdominal swelling through tissue drainage support",
                "Coeliac Disease: Structural gluten-sensitive enteropathy care and intestinal lining rehabilitation",
                "Gout: Targeted uric acid elimination, crystal deposit mitigation, and joint protection care",
                "Obesity: Natural metabolic reset mechanisms, endocrine balance, and sustainable lipid reduction"
            ]
        },
        {
            trackTitle: "Infectious, Autoimmune & Cellular Medicine",
            icon: <ShieldAlert size={18} className="text-info" />,
            bgColor: "bg-info bg-opacity-10",
            topics: [
                "HIV & AIDS: Advanced cellular immune fortification frameworks and structural nutritional support",
                "Hepatitis: Hepatic viral load stabilization, tissue inflammation controls, and liver defense keys",
                "Elephantiasis: Lymphatic circulation management, fluid staging controls, and tissue health support",
                "Gangrene: Ischemic tissue preservation, micro-vascular stimulation, and necrotic risk management",
                "Goitre: Thyroid follicular management, iodine assimilation optimization, and endocrine health"
            ]
        },
        {
            trackTitle: "General Internal Pathology & Systems Care",
            icon: <HeartPulse size={18} className="text-purple" />, // Replace text-purple with custom color or inline style if needed
            bgColor: "bg-light border-start border-purple",
            topics: [
                "Arthritis: Comprehensive cartilage preservation, synovial lubrication, and mobility restoration",
                "Haemorrhoids: Venous pressure mitigation, pelvic circulatory flow stabilization, and tissue recovery",
                "Hernia: Abdominal wall core pressure management, muscular support rules, and holistic palliative care",
                "Insomnia: Neurological sleep architecture restoration via natural neuro-transmitter stabilization",
                "High Blood Pressure: Arterial compliance optimization and circulatory fluid tension management",
                "Convulsion & Epilepsy: Central nervous system soothing therapeutics and neurological electrical balance"
            ]
        }
    ];

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
            style={{
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(6px)',
                zIndex: 99999
            }}
            onClick={handleCloseModal}
        >
            <div
                className="card border-0 shadow-lg position-relative overflow-hidden w-100"
                style={{ maxWidth: '540px', borderRadius: '1.5rem', maxHeight: '98vh', overflowY: 'auto' }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Micro Dismiss Button Anchor */}
                <button
                    type="button"
                    className="position-absolute btn p-0 d-flex align-items-center justify-content-center bg-dark bg-opacity-25 text-white rounded-circle"
                    style={{ top: '1rem', right: '1rem', width: '32px', height: '32px', border: 'none', zIndex: 10 }}
                    onClick={handleCloseModal}
                    aria-label="Close Announcement"
                >
                    <X size={20} />
                </button>
                
                {/* Hero Graphical Backdrop Strip */}
                <div
                    className="text-center text-white p-4 pt-5"
                    style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)' }}
                >
                    <span
                        className="d-inline-flex align-items-center gap-1 px-3 py-1 rounded-pill mb-2 fw-bold text-uppercase glass-badge-pulse"
                        style={{
                            fontSize: '0.8rem',
                            color: '#d4af37',
                            backdropFilter: 'blur(4px)',
                            WebkitBackdropFilter: 'blur(4px)', // Safari support
                            backgroundColor: 'rgba(255, 255, 255, 0.12)',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        }}
                    >
                        <Flame size={12} fill="currentColor" className="flame-flicker-icon" /> Limited Seat Event
                    </span>
                    <h2 className="fw-extrabold m-0 mb-2 lh-sm tracking-tight fs-4">10-Day Life-Saving Health Seminar</h2>
                    <p className="small m-0 text-light opacity-90 lh-base">Empower your wellness journey through prophetic medicine and natural healing sciences.</p>
                </div>

                {/* Core Details Content Deck */}
                <div className="card-body p-4 bg-white" style={{ maxHeight: '80vh', overflowY: 'auto' }}>

                    {/* Schedule Ribbon */}
                    <div className="d-flex align-items-center gap-3 p-3 rounded-3 border bg-light mb-3">
                        <div className="p-2 rounded bg-success bg-opacity-10 text-success d-flex align-items-center">
                            <Calendar size={20} />
                        </div>
                        <div className="lh-sm">
                            <span className="d-block small text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Seminar Schedule</span>
                            <strong className="text-dark">October 1st – 10th, 2026</strong>
                        </div>
                    </div>

                    {/* --- KEY BENEFITS SECTION --- */}
                    <div className="mb-3 p-3 rounded-3 border border-success border-opacity-10" style={{ backgroundColor: '#fcfdfd' }}>
                        <h5 className="small text-success text-uppercase fw-bold tracking-wider mb-3" style={{ fontSize: '1rem' }}>Why You Must Attend:</h5>
                        <div className="d-flex flex-column gap-2">
                            <div className="d-flex align-items-start gap-2 fs-7 text-dark">
                                <CheckCircle2 size={16} className="text-success mt-1 flex-shrink-0" />
                                <span>Gain clinical diagnostic skills to manage deep-seated chronic illnesses naturally.</span>
                            </div>
                            <div className="d-flex align-items-start gap-2 fs-7 text-dark">
                                <CheckCircle2 size={16} className="text-success mt-1 flex-shrink-0" />
                                <span>Learn upto <span className="fw-bold" style={{ color: '#d4af37' }}>30+ important health conditions</span> and wellness from expert practitioners.</span>
                            </div>
                            <div className="d-flex align-items-start gap-2 fs-7 text-dark">
                                <CheckCircle2 size={16} className="text-success mt-1 flex-shrink-0" />
                                <span>Master pure Prophetic Medicine treatments & therapeutic lifestyle modifications.</span>
                            </div>
                            <div className="d-flex align-items-start gap-2 fs-7 text-dark">
                                <CheckCircle2 size={16} className="text-success mt-1 flex-shrink-0" />
                                <span>Earn a <span className="fw-bold" style={{ color: '#d4af37' }}>recognized professional certificate</span> to boost your holistic health credentials.</span>
                            </div>
                        </div>
                    </div>

                    {/* Curriculum Outline */}
                    <div className="w-100 p-3 rounded-4 border bg-white mt-3 mb-4 animate-fade-in">
                        {/* Header Title Accent Box */}
                        <div className="d-flex align-items-center gap-2 mb-3 border-bottom pb-2">
                            <BookOpen size={20} className="text-success" />
                            <h5 className="fw-extrabold text-success text-uppercase m-0 tracking-tight" style={{ fontSize: '0.85rem' }}>
                                Comprehensive Seminar Curriculum (35 Core Pillars)
                            </h5>
                        </div>

                        {/* Scrollable Curriculum Screen Guard Viewport */}
                        <div style={{ maxHeight: '250px', overflowY: 'auto', paddingRight: '4px', scrollbarWidth: 'thin', scrollbarColor: '#10b981 transparent', overflowX: 'hidden' }}>
                            <div className="row g-3">
                                {curriculumData.map((track, trackIdx) => (
                                    <div key={trackIdx} className="col-12">
                                        {/* Category Banner Title Strip */}
                                        <div className="d-flex align-items-center gap-2 p-2 rounded-2 mb-2 fw-bold text-dark bg-light border" style={{ fontSize: '0.8rem' }}>
                                            <div className={`p-1 rounded ${track.bgColor} d-flex align-items-center`}>
                                                {track.icon}
                                            </div>
                                            <span className="text-uppercase tracking-wide">{track.trackTitle}</span>
                                        </div>

                                        {/* Topics Grid Rows */}
                                        <div className="row g-2 ps-2">
                                            {track.topics.map((topic, topicIdx) => (
                                                <div key={topicIdx} className="col-12 col-md-6 d-flex align-items-start gap-2">
                                                    <CheckCircle size={14} className="text-success mt-1 flex-shrink-0" />
                                                    <span className="text-muted lh-sm text-start" style={{ fontSize: '0.75rem' }}>
                                                        {topic}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Highly Converting Tiered Pricing Blocks */}
                    <div className="row g-3 mb-3">
                        <div className="col-12 col-sm-6">
                            <div className="p-3 rounded-3 text-center border-2 border border-success position-relative" style={{ backgroundColor: '#ecfdf5' }}>
                                <span
                                    className="position-absolute bg-success text-white px-2 py-1 rounded fw-bolder text-uppercase"
                                    style={{ fontSize: '0.6rem', top: '-10px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}
                                >
                                    First 100 Seats
                                </span>
                                <span className="d-block small text-muted fw-semibold mb-1">Early Bird Special</span>
                                <h3 className="m-0 fw-black text-success fs-3">₦15,000</h3>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <div className="p-3 rounded-3 text-center border bg-light">
                                <span className="d-block small text-muted fw-semibold mb-1">Standard Reg</span>
                                <h3 className="m-0 fw-black text-dark fs-3">₦25,000</h3>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Pricing Value Asset Track */}
                    <div
                        className="d-flex align-items-center gap-2 p-3 rounded-3 mb-3 border border-warning border-opacity-20"
                        style={{ backgroundColor: '#fffbeb', color: '#b45309', fontSize: '0.85rem' }}
                    >
                        <Award size={18} className="flex-shrink-0" />
                        <span>Professional Certificate of Participation: <strong className="fw-bold">₦5,000</strong></span>
                    </div>

                    {/* Curated Bonus Feature Highlights */}
                    <div className="pb-3 border-bottom">
                        <h5 className="small text-muted text-uppercase fw-bold tracking-wider mb-2" style={{ fontSize: '0.9rem' }}>Includes Special Bonus Classes:</h5>
                        <div className="d-flex flex-wrap gap-1">
                            {['Zika Virus', 'Zoonosis', 'Lumbago', 'Anxiety Control', 'Cholesterol Care'].map((bonus) => (
                                <span key={bonus} className="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-10 px-2 py-1.5 fw-semibold text-dark rounded-2 small" style={{ fontSize: '0.75rem' }}>
                                    {bonus}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Primary Call to Action Conversion Engine */}
                    <div className="text-center mt-3">
                        <a
                            href={`https://wa.me/2348065855687?text=${encodeURIComponent("Hello Ar Rahmoh, I would like to pay for the seminar.")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success w-100 py-2.5 fw-bold text-uppercase d-flex align-items-center justify-content-center gap-2 border-0 shadow-sm transition-all"
                            style={{
                                background: 'linear-gradient(180deg, #10b981 0%, #059669 100%)',
                                borderRadius: '0.75rem',
                                fontSize: '0.875rem'
                            }}
                        >
                            <span>Secure Registration Spot</span>
                            <ArrowRight size={16} />
                        </a>
                        <p className="text-muted m-0 mt-3 d-flex align-items-center justify-content-center gap-1 opacity-70" style={{ fontSize: '0.7rem' }}>
                            <ShieldCheck size={14} className="text-success" />
                            Regulated with TCAM & Federal Ministry of Health Guidelines
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
