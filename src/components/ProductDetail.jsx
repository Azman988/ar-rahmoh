import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming react-router is used for the page URL
import { ShieldCheck, CheckCircle2, AlertCircle, ShoppingCart, Plus, Minus, ArrowLeft, Truck, Share2Icon, CopyIcon, CopyCheckIcon } from 'lucide-react';
import { useCart } from './CartContext';

export function ProductDetail() {
    const { id } = useParams(); // Fetch product ID from the URL
    const navigate = useNavigate();
    const { quantities, handleQtyChange, addToCart } = useCart();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(false);
    const [isCopied, setIsCopied] = useState(false)

    // --- Fetch Single Product Details ---
    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(false);
            try {
                const res = await fetch(`/api/v1/admin/products/${id}`);
                const result = await res.json();

                if (res.ok) {
                    setProduct(result.data);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Error fetching product details:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchProduct();
    }, [id]);

    // product link copy function
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000)
        } catch (err) {
            console.error(err)
        }
    }

    const quantity = quantities[id] || 1;

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    // --- Skeleton Loader View ---
    if (loading) {
        return (
            <div className="container py-5">
                <div className="row g-5">
                    {/* Image Skeleton */}
                    <div className="col-lg-6">
                        <div className="placeholder-glow">
                            <div className="placeholder w-100 rounded-4" style={{ height: '500px' }}></div>
                        </div>
                    </div>
                    {/* Details Skeleton */}
                    <div className="col-lg-6">
                        <div className="placeholder-glow d-flex flex-column gap-3">
                            <span className="placeholder col-4 rounded mb-2"></span>
                            <span className="placeholder col-8 fs-2 rounded mb-3"></span>
                            <span className="placeholder col-3 fs-4 rounded mb-4"></span>

                            <hr className="my-2" />

                            <span className="placeholder col-5 rounded"></span>
                            <span className="placeholder col-12 rounded"></span>
                            <span className="placeholder col-12 rounded"></span>
                            <span className="placeholder col-9 rounded mb-4"></span>

                            <span className="placeholder col-12 rounded-3" style={{ height: '50px' }}></span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --- Error View ---
    if (error || !product) {
        return (
            <div className="container py-5 text-center min-vh-50 d-flex flex-column align-items-center justify-content-center">
                <AlertCircle size={48} className="text-danger mb-3" />
                <h3 className="fw-bold">Product not found</h3>
                <p className="text-muted">The product you are looking for does not exist or was removed.</p>
                <button onClick={() => navigate('/products')} className="btn btn-outline-dark mt-3">
                    <ArrowLeft size={18} className="me-2" /> Back to Shop
                </button>
            </div>
        );
    }

    // --- Main Product Page View ---
    return (
        <div className="container container-max py-5">
            {/* Breadcrumb / Back button */}
            <div className="mb-4 pb-2 border-bottom border-light-dark d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3">
                <div className="d-flex align-items-center gap-2">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-link text-decoration-none text-dark p-0 d-inline-flex align-items-center"
                    >
                        <ArrowLeft size={18} className="me-2" /> Back
                    </button>
                    /
                    <p className="d-inline-flex align-items-center gap-1 text-muted mb-0 text-truncate fw-bold" style={{ maxWidth: '100%' }}>
                      {product.name}  
                    </p>
                </div>

                <button className="btn btn-outline-success d-inline-flex align-items-center gap-2" onClick={handleCopy}>
                    {isCopied ? <CopyCheckIcon size={18} /> : <CopyIcon size={18} />}
                </button>
            </div>

            <div className="row g-5 align-items-center">

                {/* Left Column: Product Image */}
                <div className="col-lg-6">
                    <div className="bg-light rounded-4 border p-4 d-flex align-items-center justify-content-center position-relative shadow-sm" style={{ minHeight: '500px' }}>
                        <img
                            src={product.img}
                            alt={product.name}
                            className="img-fluid object-fit-contain"
                            style={{ maxHeight: '450px' }}
                        />
                        {/* Status Badge Positioned on Image */}
                        <span className={`position-absolute top-0 start-0 m-4 badge px-3 py-2 rounded-pill fs-7 tracking-wide text-uppercase fw-semibold ${product.inStock ? 'bg-success-subtle text-success border border-success-subtle' : 'bg-danger-subtle text-danger border border-danger-subtle'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>
                </div>

                {/* Right Column: Product Details */}
                <div className="col-lg-6">
                    <div className="d-flex flex-column text-start">

                        {/* Header Section */}
                        <h1 className="fw-extrabold text-dark mb-2 display-6">{product.name}</h1>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <span className="fw-extrabold text-success fs-3">₦{product.price.toLocaleString()}</span>
                        </div>

                        {/* Description / Content Sections */}
                        <div className="d-flex flex-column gap-4 border-top border-bottom py-4 mb-4">
                            {product.composition && (
                                <div>
                                    <h6 className="fw-bold text-dark fs-6 text-uppercase tracking-wide mb-2 d-flex align-items-center gap-2">
                                        <CheckCircle2 size={18} className="text-success" /> Product Composition
                                    </h6>
                                    <p className="text-secondary lh-lg mb-0">{product.composition}</p>
                                </div>
                            )}

                            {product.benefits && (
                                <div>
                                    <h6 className="fw-bold text-dark fs-6 text-uppercase tracking-wide mb-2 d-flex align-items-center gap-2">
                                        <ShieldCheck size={18} className="text-success" /> Key Benefits
                                    </h6>
                                    <p className="text-secondary lh-lg mb-0">{product.benefits}</p>
                                </div>
                            )}

                            {product.usage && (
                                <div>
                                    <h6 className="fw-bold text-dark fs-6 text-uppercase tracking-wide mb-2">Recommended Usage</h6>
                                    <p className="text-secondary lh-lg mb-0 bg-light p-3 rounded-3 border">{product.usage}</p>
                                </div>
                            )}
                        </div>

                        {/* Add to Cart & Actions */}
                        <div className="d-flex flex-column flex-sm-row gap-3">
                            {/* Quantity Selector */}
                            <div className="d-flex align-items-center border rounded-3 overflow-hidden bg-light w-100" style={{ width: '140px' }}>
                                <button
                                    onClick={() => handleQtyChange(product._id, 'dec')}
                                    className="btn btn-light border-0 px-3 py-3 rounded-0 text-dark hover-bg-secondary"
                                    disabled={!product.inStock || quantity <= 1}
                                >
                                    <Minus size={18} />
                                </button>
                                <span className="fw-bold fs-5 flex-grow-1 text-center">{quantity}</span>
                                <button
                                    onClick={() => handleQtyChange(product._id, 'inc')}
                                    className="btn btn-light border-0 px-3 py-3 rounded-0 text-dark hover-bg-secondary"
                                    disabled={!product.inStock}
                                >
                                    <Plus size={18} />
                                </button>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                                className="btn btn-success flex-grow-1 py-3 fw-bold text-uppercase fs-6 tracking-wide rounded-3 d-flex align-items-center justify-content-center gap-2 shadow-sm w-100"
                            >
                                <ShoppingCart size={20} />
                                {product.inStock ? 'Add To Cart' : 'Currently Unavailable'}
                            </button>
                        </div>

                        {/* Trust Signals */}
                        <div className="d-flex align-items-center justify-content-end gap-4 mt-4 pt-3 text-muted fs-7">
                            <div className="d-flex align-items-center gap-2">
                                <Truck size={18} />
                                <span>Nationwide Delivery</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <ShieldCheck size={18} />
                                <span>Secure Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}