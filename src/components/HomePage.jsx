import { Link } from 'react-router'
import Logo from '../assets/ar-Rahmoh-logo.webp'
import WhatsAppOrderBtn from './WhatsappBtn/WhatsappBtn'
import './HomePage.css'
import { Feedback } from './Feedback/Feedback'
import { CheckCircle2, Handshake, HeartPulse, Leaf, LucideHeading6, LucideShoppingBag, MessageCircleCode, MoveRight, Package, PhoneCall, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { ProductCatalog } from './ProductCard/ProductCard'
import { ProductSkeleton } from './ProductCard/ProductSkeleton'
import { PromoModal } from './SeminarModal/SeminarModal'

export function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);
    // --- Fetch Live Product Catalog from API Endpoint ---
    useEffect(() => {
        const fetchLiveCatalog = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/v1/admin/products');
                const result = await res.json();

                if (res.ok) setProducts(result.data || []);
            } catch (err) {
                console.error("Error drawing live records:", err);
                setProducts([]); // Fallback to an empty array to prevent filtering crashes
            } finally {
                setLoading(false);
            }
        };

        fetchLiveCatalog();
    }, []);

    // Core Shuffle Processing: Selects 10 completely random products with zero inner duplicates
    const randomTenProducts = useMemo(() => {
        // Safe check to avoid code breaks if database layers are empty
        if (!products || products.length === 0) return [];

        // Deep copy the original array to avoid mutate errors
        const arrayClone = [...products];

        // Fisher-Yates array permutation methodology execution
        for (let i = arrayClone.length - 1; i > 0; i--) {
            // eslint-disable-next-line react-hooks/purity
            const j = Math.floor(Math.random() * (i + 1));
            [arrayClone[i], arrayClone[j]] = [arrayClone[j], arrayClone[i]];
        }

        // Extract exactly the first 10 item profiles from the mutated sequence
        return arrayClone.slice(0, 10);
    }, [products]);

    return (
        <>
            {/* Seminal Modal */}
            <PromoModal isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Hero Section */}
            <section className="hero-section position-relative overflow-hidden py-5 d-flex align-items-center">
                {/* Ambient Background Glowing Accents */}
                <div className="hero-glow-shape position-absolute rounded-circle opacity-10"></div>

                <div className="container-fluid container-max py-3 position-relative z-index-2">
                    <div className="row align-items-center min-vh-75">

                        {/* Premium Content Typography */}
                        <div className="col-12 col-md-7 text-center text-md-start">
                            <div className="hero-content-cluster d-flex flex-column gap-3 text-white">

                                {/* Modern Soft Status Badge */}
                                <div className="d-flex justify-content-center justify-content-md-start mb-1">
                                    <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill text-uppercase fw-semibold tracking-wider fs-8 d-inline-flex align-items-center gap-1">
                                        <Sparkles size={12} /> Certified Prophetic & Holistic Care
                                    </span>
                                </div>

                                {/* Main Branding Message Hierarchy */}
                                <div className="brand-header-group">
                                    <h1 className="display-5 fw-extrabold text-white lh-sm mb-3 text-uppercase">
                                        Ar-Rahmoh <br className="d-none d-lg-inline" />
                                        <span className="text-gradient">Islamic Cure</span> & <br />
                                        Blood Cupping Therapy
                                    </h1>
                                    <p className="lead text-white-50 fw-light mb-0 fs-6 max-w-500 mx-auto mx-md-0 lh-base">
                                        Your premium trusted source for integrated modern wellness, authentic Sunnatic healings, and 100% natural, laboratory-tested herbal medications.
                                    </p>
                                </div>

                                {/* Core Pillars Segment Bar */}
                                <div className="hero-pillars-row my-2 py-3 border-top border-bottom border-white-10 d-flex flex-wrap justify-content-center justify-content-md-start gap-3 text-white-70 fs-7 fw-medium">
                                    <span className="d-flex align-items-center gap-1.5">🌿 Herbal Medications</span>
                                    <span className="text-white-30 d-none d-sm-inline">•</span>
                                    <span className="d-flex align-items-center gap-1.5">🧬 Holistic Supplements</span>
                                    <span className="text-white-30 d-none d-sm-inline">•</span>
                                    <span className="d-flex align-items-center gap-1.5">🩸 Sunnatic Healings</span>
                                </div>

                                {/* Dual Call To Actions */}
                                <div className="hero-cta-group d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-2">
                                    <Link to="/product" className="btn btn-hero-primary text-white px-4 py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2 shadow-lg rounded-3 text-uppercase fs-7 tracking-wide">
                                        <ShoppingBag size={16} /> Shop Products
                                    </Link>
                                    <Link to="/about" className="btn btn-hero-outline text-white px-4 py-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2 rounded-3 text-uppercase fs-7 tracking-wide transition-all">
                                        Learn More <MoveRight size={16} className="arrow-kinetic" />
                                    </Link>
                                </div>

                            </div>
                        </div>

                        {/* Premium Framed Logo Container */}
                        <div className="col-12 col-md-5 d-md-block d-none d-flex justify-content-center justify-content-md-end mt-5 mt-md-0">
                            <div className="hero-image-frame position-relative p-4 rounded-4 shadow-2xl backdrop-blur-card border border-white-10">
                                <div className="hero-glow-layer position-absolute rounded-4"></div>
                                <img
                                    src={Logo}
                                    alt="Ar-Rahmoh Logo Display"
                                    className="img-fluid hero-branding-logo object-fit-contain"
                                    loading="eager"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-4 pillars-section position-relative overflow-hidden">

                <div className='container-fluid container-max d-flex align-items-center justify-content-center py-4 px-xl-0 pillars-container'>
                    <div className='row g-4 row-cols-1 row-cols-md-2 row-cols-xl-4'>
                        <div className="col border-white-10">
                            <div>
                                <div className="pillar-icon text-danger heart-pillar">
                                    <HeartPulse size={24} />
                                </div>
                                <h6 className='fw-bold'>Perfect Healing</h6>
                                <p>We combine time-honored Sunnah traditions with precise therapeutic techniques to facilitate a complete and balanced recovery for mind and body.</p>
                            </div>
                        </div>

                        <div className="col border-white-10">
                            <div>
                                <div className="pillar-icon text-success leaf-pillar">
                                    <Leaf size={24} />
                                </div>
                                <h6 className='fw-bold'>Natural Supplement</h6>

                                <p>Our premium selection of organic remedies and prophetic nutrients offers pure, highly potent benefits sourced straight from the heart of nature.</p>
                            </div>
                        </div>

                        <div className="col border-white-10">
                            <div>
                                <div className="pillar-icon text-primary handshake-pillar">
                                    <Handshake size={24} />
                                </div>
                                <h6 className='fw-bold'>Built on Trust</h6>
                                <p>Integrity shapes our practice; we are dedicated to offering honest, ethical care and reliable wellness products your family can always depend on.</p>
                            </div>
                        </div>

                        <div className="col border-white-10">
                            <div>
                                <div className="pillar-icon text-primary handshake-pillar">
                                    <ShieldCheck size={24} />
                                </div>
                                <h6 className='fw-bold'>Certification</h6>
                                <p>Every product and procedure strictly meets rigorous safety standards, ensuring fully verified, authenticated, and globally approved treatment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Render random 10 products */}
            <section className="py-5 product-section" id='product-section'>
                <div className="container-fluid container-max px-xl-2">

                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3 mb-4 pb-2 border-bottom border-light-dark">
                        <div>
                            <span className="text-white fw-semibold fs-7 tracking-wider mb-1 d-flex align-items-center gap-2 py-1 px-2 bg-success rounded-4 pe-none">
                                <Package size={17} /> Premium Remedies
                            </span>

                            <h5 className="fw-bold text-dark-emerald mt-3 mb-0">Curated Selection</h5>
                            <p className="text-muted mb-0 fs-7">
                                Explore our laboratory-tested prophetic nutrients, natural elixirs, and holistic supplements.
                            </p>
                        </div>
                        <Link to="/product" className="btn-view-all fw-semibold d-inline-flex align-items-center gap-2 text-success text-decoration-none text-nowrap">
                            View all products <MoveRight size={18} className="arrow-icon" />
                        </Link>
                    </div>

                    {/* Product cards are dynamically rendered here */}
                    <div className="d-flex align-items-center gap-2 overflow-auto p-3 rounded-4 product-container">
                        {loading ? (
                            <ProductSkeleton />
                        ) : (
                            <ProductCatalog products={randomTenProducts} />
                        )}
                    </div>
                </div>
            </section>

            {/* Service Section */}
            <section className="py-5 service-section">
                <div className="container-fluid container-max px-xl-2">

                    {/* Header */}
                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3 mb-4 pb-2 border-bottom text-white">
                        <div>
                            <span className="text-success fw-bold d-flex align-items-center gap-2 fs-7 tracking-wider py-1 px-2 bg-white rounded-4 pe-none"><ShieldCheck size={17} /> Our Expertise</span>

                            <h5 className="fw-bold text-white mt-3 mb-0">Top Medical Services</h5>

                            <p className="mb-0 fs-7 text-white-90">
                                Explore our premium holistic therapies and specialized sunnatic treatments.
                            </p>
                        </div>
                        <Link to="/service" className="btn-view-all fw-semibold d-inline-flex align-items-center gap-2 text-decoration-none text-nowrap text-light">
                            View all services <MoveRight size={18} className="arrow-icon" />
                        </Link>
                    </div>

                    {/* Services Responsive Grid */}
                    <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-xl-4">
                        <div className="col">
                            <div className="service-card h-100 p-4 d-flex flex-column justify-content-between rounded-4 shadow-sm bg-white border border-light-dark">
                                <div>
                                    <div className="icon-badge text-success mb-3 p-2 rounded-3 bg-success-subtle d-inline-block">
                                        <CheckCircle2 size={22} />
                                    </div>
                                    <h5 className="fw-bold text-dark-emerald fs-5 mb-2">Authentic Hijama Therapy</h5>
                                    <p className="text-muted fs-7 mb-0 lh-base">
                                        Traditional wet and dry blood cupping performed under strict clinical hygiene protocols to remove toxins and boost immunity.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="service-card h-100 p-4 d-flex flex-column justify-content-between rounded-4 shadow-sm bg-white border border-light-dark">
                                <div>
                                    <div className="icon-badge text-warning mb-3 p-2 rounded-3 bg-warning-subtle d-inline-block">
                                        <CheckCircle2 size={22} />
                                    </div>
                                    <h5 className="fw-bold text-dark-emerald fs-5 mb-2">Bee Venom Injection</h5>
                                    <p className="text-muted fs-7 mb-0 lh-base">
                                        Targeted apitherapy solutions leveraging natural compounds to naturally ease chronic pain and reduce localized joint inflammation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="service-card h-100 p-4 d-flex flex-column justify-content-between rounded-4 shadow-sm bg-white border border-light-dark">
                                <div>
                                    <div className="icon-badge text-success mb-3 p-2 rounded-3 bg-success-subtle d-inline-block">
                                        <CheckCircle2 size={22} />
                                    </div>
                                    <h5 className="fw-bold text-dark-emerald fs-5 mb-2">Natural Supplements</h5>
                                    <p className="text-muted fs-7 mb-0 lh-base">
                                        Scientifically-vetted organic remedies and prophetic formulations sourced strictly for therapeutic potency and safety.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="service-card h-100 p-4 d-flex flex-column justify-content-between rounded-4 shadow-sm bg-white border border-light-dark">
                                <div>
                                    <div className="icon-badge text-info mb-3 p-2 rounded-3 bg-info-subtle d-inline-block">
                                        <CheckCircle2 size={22} />
                                    </div>
                                    <h5 className="fw-bold text-dark-emerald fs-5 mb-2">Expert Consultation</h5>
                                    <p className="text-muted fs-7 mb-0 lh-base">
                                        One-on-one professional health assessments to structure personalized holistic healing blueprints built for long-term health.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Feedback home={true} />

            <section className="contact-cta-section py-5 px-3 position-relative overflow-hidden">
                {/* Ambient Background Decorative Grid Pattern */}
                <div className="cta-grid-overlay position-absolute top-0 start-0 end-0 bottom-0 opacity-10"></div>

                <div className="container position-relative z-index-2 py-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 text-center">

                            {/* Upper Micro Tag */}
                            <div className="badge-wrapper mb-3 d-flex justify-content-center">
                                <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill text-uppercase fw-semibold tracking-wider fs-7">
                                    Immediate Patient Support
                                </span>
                            </div>

                            {/* Heading & Subtext Visual Hierarchy */}
                            <h2 className="fw-extrabold text-white display-6 mb-3">
                                Begin Your Healing Journey Today
                            </h2>
                            <p className="text-white-50 fs-6 max-w-600 mx-auto mb-4 pb-2 lh-base fw-light">
                                Connect directly with our clinical professionals via WhatsApp or an immediate direct voice call for swift guidance and holistic health consultations.
                            </p>

                            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
                                <a
                                    href="https://wa.me/2349075511763"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-whatsapp-premium px-4 py-3 fw-bold d-inline-flex align-items-center justify-content-center gap-2 shadow"
                                >
                                    <MessageCircleCode size={20} /> Chat on WhatsApp
                                </a>

                                <a
                                    href="tel:09046088723"
                                    className="btn btn-outline-light-premium px-4 py-3 fw-semibold d-inline-flex align-items-center justify-content-center gap-2 transition-all"
                                >
                                    <PhoneCall size={18} /> Call Specialist Now
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}