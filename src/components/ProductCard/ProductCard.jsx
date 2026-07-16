import { ShoppingBag, ShieldCheck, AlertCircle, ShoppingCart, Plus, Minus, Trash2, X, Eye } from 'lucide-react';
import '../Product.css';
import { useCart } from '../CartContext';

export function ProductCatalog({ products, setActiveProduct }) {
    const { quantities, handleQtyChange, addToCart } = useCart();

    return (
        <>
            {products.map(product => {
                const currentQty = quantities[product._id] || 1;
                return (
                    <div key={product._id} className="col">
                        <div className="product-premium-card h-100 p-4 rounded-4 shadow-sm bg-white border border-light-dark d-flex flex-column justify-content-between">
                            
                            {/* Clickable Card Body Area for detailed description mapping modal trigger */}
                            <div className="cursor-pointer" onClick={() => setActiveProduct(product)}>
                                <div className="w-100 d-flex align-items-center justify-content-center mb-2">
                                    <div className="product-img-wrapper border rounded-3 position-relative overflow-hidden bg-light d-flex align-items-center justify-content-center">
                                        <img src={product.img} alt={product.name} className="product-catalog-img img-fluid object-fit-cover" loading="lazy" />
                                        <div className="image-hover-overlay position-absolute top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-20 d-flex align-items-center justify-content-center opacity-0">
                                            <span className="text-white fw-semibold fs-7 d-inline-flex align-items-center gap-1"><Eye size={16}/> Quick View</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h5 className="fw-bold text-dark-emerald fs-6 mb-1 text-truncate text-truncate-2 px-1">{product.name}</h5>
                                    <p className="fw-extrabold text-success fs-5 mb-0">₦{product.price.toLocaleString()}</p>
                                </div>
                            </div>

                            {/* Footer Cart Incremental Operations Box Control Area */}
                            <div className="pt-2 border-top border-light-dark mt-2" onClick={(e) => e.stopPropagation()}>
                                <div className="d-flex align-items-center justify-content-center gap-3 mb-2">
                                    <button onClick={() => handleQtyChange(product.id, 'dec')} className="btn btn-outline-secondary p-1.5 rounded-3 d-inline-flex align-items-center justify-content-center qty-btn">
                                        <Minus size={14} />
                                    </button>
                                    <span className="fw-bold px-2 text-dark fs-6 select-none mini-counter-width text-center">{currentQty}</span>
                                    <button onClick={() => handleQtyChange(product.id, 'inc')} className="btn btn-outline-secondary p-1.5 rounded-3 d-inline-flex align-items-center justify-content-center qty-btn">
                                        <Plus size={14} />
                                    </button>
                                </div>

                                <button 
                                    onClick={() => addToCart(product)} 
                                    className="add-to-cart-btn btn text-white w-100 py-2 fw-bold text-uppercase fs-7 tracking-wide rounded-4 shadow-sm d-flex align-items-center justify-content-center gap-2"
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>   
    );
}
            
            