import React from 'react';
import { X, ShieldCheck, CheckCircle2, AlertCircle, ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router';

// Sidebar Drawer Cart Component with Full CRUD Action ---
export function SideCart({ close }) {
    const navigate = useNavigate(); 
    const { cart, setCart, updateCartQty, removeFromCart, setIsCartOpen } = useCart();
    const grandTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Consolidated String WhatsApp Checkout String Builder
    const handleWhatsAppCheckout = () => {
        const phoneNumber = "2348065855687";
        if (cart.length === 0) return;

        let message = `*AR-RAHMOH ISLAMIC CURE - NEW INCOMING ORDER*\n`;
        let totalSum = 0;
        cart.forEach((item, index) => {
            const itemCost = item.price * item.qty;
            totalSum += itemCost;
            message += `${index + 1}. *${item.name}* - Quantity: ${item.qty} - Price: ₦${item.price.toLocaleString()} each\nSubtotal: ₦${itemCost.toLocaleString()}\n`;
        });

        message += `\n*TOTAL ORDER VALUE:* ₦${totalSum.toLocaleString()}`;

        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');

        setCart([]);
        localStorage.removeItem('ar_rahmoh_cart');
        setIsCartOpen(false); // Smoothly close the sidebar drawer view frame
    };

    return (
        <div className="modal-backdrop-layer position-fixed top-0 start-0 end-0 bottom-0 animate-fade-in" style={{ zIndex: 9999 }} onClick={close}>
            <div className="sidebar-drawer-card bg-white position-fixed top-0 end-0 bottom-0 shadow-2xl border-start border-light-dark d-flex flex-column justify-content-between animate-slide-left" onClick={(e) => e.stopPropagation()}>

                {/* Drawer Header Row */}
                <div className="p-3 border-bottom border-light-dark d-flex align-items-center justify-content-between bg-light">
                    <div className="d-flex align-items-center gap-2 text-dark-emerald fw-extrabold fs-5">
                        <ShoppingCart size={20} className="text-success" />
                        <span>Your Order Cart</span>
                    </div>
                    <button onClick={close} className="btn btn-light p-2 rounded-circle border-0 d-flex align-items-center justify-content-center" aria-label="Close Cart">
                        <X size={16} />
                    </button>
                </div>

                {/* Main Scrollable Items List Wrapper Area */}
                <div className="flex-grow-1 overflow-y-auto p-3 d-flex flex-column gap-3">
                    {cart.length === 0 ? (
                        <div className="text-center my-auto py-5 text-muted px-3">
                            <ShoppingCart size={40} className="mx-auto mb-3 opacity-25 text-success" />
                            <p className="fw-medium mb-1 fs-6">Your shopping cart is empty</p>
                            <p className="fs-7 opacity-75 mb-0">Select item configurations from the digital catalog grid list to build checkout lines.</p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div onClick={() => navigate(`/product/${item._id}`)} key={item._id} className="p-3 rounded-3 border border-light-dark bg-light-subtle d-flex align-items-center gap-3 group-item hover-hover cursor-pointer transition-all overflow-hidden">
                                <img src={item.img} alt={item.name} className="img-fluid rounded-2 border flex-shrink-0 object-fit-cover rounded-2" style={{ width: 60, height: 60 }} />
                                <div className="flex-grow-1 min-w-0">
                                    <h6 className="fw-bold text-dark-emerald fs-7 mb-1 text-truncate">{item.name}</h6>
                                    <p className="fw-bold text-success fs-7 mb-2">₦{(item.price * item.qty).toLocaleString()}</p>

                                    <div className="d-flex align-items-center justify-content-between gap-2">
                                        {/* Quantity Controls */}
                                        <div onClick={(e) => e.preventDefault()} className="d-flex align-items-center gap-2">
                                            <button onClick={(e) => {
                                                e.preventDefault();
                                                updateCartQty(item._id, 'dec');
                                            }} disabled={item.qty <= 1} className="btn btn-white border p-1 rounded-2 d-inline-flex align-items-center justify-content-center qty-btn-mini hover-bg-secondary">
                                                <Minus size={12} />
                                            </button>

                                            <span className="fw-bold px-1.5 text-dark fs-7 select-none mini-counter-width-sm text-center">{item.qty}</span>

                                            <button onClick={(e) => {
                                                e.preventDefault();
                                                updateCartQty(item._id, 'inc');
                                            }} className="btn btn-white border p-1 rounded-2 d-inline-flex align-items-center justify-content-center qty-btn-mini hover-bg-secondary">
                                                <Plus size={12} />
                                            </button>
                                        </div>

                                        {/* Remove Item Button */}
                                        <button onClick={(e) => {
                                            e.preventDefault();
                                            removeFromCart(item._id);
                                        }} className="btn btn-link text-danger p-1.5 rounded-3 hover-bg-danger transition-all remove-item-btn" aria-label="Delete Item">
                                            <Trash2 size={15} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Bottom Checkout Action Panel */}
                {cart.length > 0 && (
                    <div className="p-3 bg-light border-top border-light-dark">
                        <div className="d-flex align-items-center justify-content-between mb-3 px-1">
                            <span className="fw-bold text-muted fs-7 text-uppercase tracking-wide">Est. Total Sum:</span>
                            <span className="fw-extrabold text-dark-emerald fs-5">₦{grandTotal.toLocaleString()}</span>
                        </div>
                        <button onClick={handleWhatsAppCheckout} className="btn btn-success w-100 py-2.5 fw-bold text-uppercase fs-7 tracking-wide rounded-3 shadow-sm d-flex align-items-center justify-content-center gap-2 transition-all checkout-btn-whatsapp">
                            Checkout via WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}