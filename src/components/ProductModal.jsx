import React from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

// Product Details Modal Module ---
export function ProductModal({ product, addToCart, close }) {
    return (
        <div className="modal-backdrop-layer position-fixed top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center px-3 animate-fade-in" style={{zIndex: 9999}} onClick={close}>
            <div className="modal-content-card bg-white rounded-4 shadow-xl overflow-hidden max-w-600 w-100 position-relative border border-light-dark animate-scale-up" onClick={(e) => e.stopPropagation()}>
                <button onClick={close} className="btn btn-light p-2 position-absolute top-3 end-3 rounded-circle border-0 d-flex align-items-center justify-content-center z-index-2 close-modal-btn">
                    <X size={18} />
                </button>

                <div className="modal-scroll-body p-4 max-h-85vh overflow-y-auto">
                    <div className="d-flex flex-column align-items-center text-center mb-4">
                        <div className="modal-img-frame border rounded-3 overflow-hidden bg-light mb-3 d-flex align-items-center justify-content-center">
                            <img src={product.img} alt={product.name} className="img-fluid object-fit-cover w-100 h-100" />
                        </div>
                        <h4 className="fw-extrabold text-dark-emerald mb-2 fs-5 px-3">{product.name}</h4>
                        <div className="d-flex align-items-center gap-3 mb-2">
                            <span className="fw-extrabold text-success fs-5">₦{product.price.toLocaleString()}</span>
                            <span className={`badge px-2.5 py-1 rounded-pill fs-8 tracking-wide text-uppercase fw-semibold ${product.inStock ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'}`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-3 text-start border-top border-light-dark pt-3">
                        <div>
                            <h6 className="fw-bold text-dark-emerald fs-7 text-uppercase tracking-wide mb-1">Product Composition:</h6>
                            <p className="text-muted fs-7 lh-base mb-0">{product.composition}</p>
                        </div>
                        <div>
                            <h6 className="fw-bold text-dark-emerald fs-7 text-uppercase tracking-wide mb-1">Key Benefits:</h6>
                            <p className="text-muted fs-7 lh-base mb-0">{product.benefits}</p>
                        </div>
                        {product.usage && (
                            <div>
                                <h6 className="fw-bold text-dark-emerald fs-7 text-uppercase tracking-wide mb-1">Recommended Usage:</h6>
                                <p className="text-muted fs-7 lh-base mb-0">{product.usage}</p>
                            </div>
                        )}
                    </div>

                    <div className="pt-4 border-top border-light-dark mt-4">
                        <button onClick={() => { addToCart(product); close(); }} className="btn btn-success w-100 py-2.5 fw-bold text-uppercase fs-7 tracking-wide rounded-3 d-flex align-items-center justify-content-center gap-2">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
