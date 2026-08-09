import { ShoppingBag, ShieldCheck, AlertCircle, ShoppingCart, Plus, Minus, Trash2, X, Eye } from 'lucide-react';
import '../Product.css';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

export function ProductCatalog({ products }) {
    const { quantities, handleQtyChange, addToCart } = useCart();
    const navigate = useNavigate(); 

    return (
        <>
            {products.map(product => {
                const currentQty = quantities[product._id] || 1;
                
                return (
                    <div key={product._id} className="col relative">
                        
                        {/* MAIN WRAPPER: Handles the redirect to the details page */}
                        <div 
                            onClick={() => navigate(`/product/${product._id}`)} 
                            className="product-premium-card h-100 p-2 p-sm-4 rounded-4 shadow-sm bg-white border border-light-dark d-flex flex-column justify-content-between text-decoration-none hover-shadow-hover"
                            style={{ cursor: 'pointer' }}
                        >
                            
                            {/* Top Card Body Area */}
                            <div className="d-flex flex-column align-items-center justify-content-center gap-2 mb-2 mb-sm-3">
                                
                                {/* Image Area */}
                                <div className="w-100 d-flex align-items-center justify-content-center mb-2">
                                    <div className="product-img-wrapper border rounded-3 overflow-hidden bg-light d-flex align-items-center justify-content-center w-100 h-100">
                                        <img src={product.img} alt={product.name} className="product-catalog-img img-fluid object-fit-cover" loading="lazy" />
                                    </div>
                                </div>

                                {/* Text Details */}
                                <div className="text-center">
                                    <h5 className="fw-bold text-dark-emerald fs-6 text-truncate text-truncate-2 px-1">{product.name}</h5>
                                    <p className="fw-extrabold text-success fs-5 mb-0">₦{product.price.toLocaleString()}</p>
                                </div>
                            </div>

                            {/* FOOTER */}
                            <div 
                                className="pt-2 border-top border-light-dark mt-2 z-index-1" 
                                onClick={(e) => e.stopPropagation()} 
                            >
                                {/* Quantity Controls */}
                                <div className="d-flex align-items-center justify-content-center gap-4 mb-2">
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            handleQtyChange(product._id, 'dec');
                                        }} 
                                        disabled={!product.inStock || currentQty <= 1}
                                        className="btn btn-outline-secondary p-1.5 rounded-3 d-inline-flex align-items-center justify-content-center qty-btn hover-bg-secondary"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    
                                    <span className="fw-bold px-2 text-dark fs-6 select-none mini-counter-width text-center">
                                        {currentQty}
                                    </span>
                                    
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            handleQtyChange(product._id, 'inc');
                                        }} 
                                        disabled={!product.inStock}
                                        className="btn btn-outline-secondary p-1.5 rounded-3 d-inline-flex align-items-center justify-content-center qty-btn hover-bg-secondary"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>

                                {/* Add to Cart Action */}
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation(); 
                                        addToCart(product);
                                    }} 
                                    disabled={!product.inStock}
                                    className={`add-to-cart-btn btn w-100 py-2 fw-bold text-uppercase fs-7 tracking-wide rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2 ${product.inStock ? 'btn-success text-white' : 'btn-secondary text-light'}`}
                                >
                                    {product.inStock ? 'Add To Cart' : 'Out of Stock'}
                                </button>
                            </div>
                            
                        </div>
                    </div>
                );
            })}
        </>   
    );
}