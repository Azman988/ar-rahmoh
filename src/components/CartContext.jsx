// /* eslint-disable react-hooks/set-state-in-effect */
// import { CheckCircle2, X } from 'lucide-react';
// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Initialize the Context
// const CartContext = createContext(null);

// export function CartProvider({ children }) {
//     const [cart, setCart] = useState([]);
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [cartCount, setCartCount] = useState(0);
//     const [quantities, setQuantities] = useState({});
//     const [toasts, setToasts] = useState([]);

//     // Reusable trigger method to push unique alert messages to the track stack
//     const triggerToast = (productName, quantity) => {
//         const id = Date.now() + Math.random();
//         const newToast = { id, productName, quantity };

//         setToasts(prev => [...prev, newToast]);

//         // Hardware-accelerated auto dismissal timer loop
//         setTimeout(() => {
//             setToasts(prev => prev.filter(toast => toast.id !== id));
//         }, 3000);
//     };

//     const removeToast = (id) => {
//         setToasts(prev => prev.filter(toast => toast.id !== id));
//     };

//     // Independence Quantity Tracking Mutators
//     const handleQtyChange = (productId, operation) => {
//         const currentQty = quantities[productId] || 1;
//         if (operation === 'inc') {
//             setQuantities({ ...quantities, [productId]: currentQty + 1 });
//         } else if (operation === 'dec' && currentQty > 1) {
//             setQuantities({ ...quantities, [productId]: currentQty - 1 });
//         }
//     };

//     // Cart Integration Mechanics
//     const addToCart = (product) => {
//         const qtyToAdd = quantities[product.id] || 1;
//         const existingItem = cart.find(item => item.id === product.id);

//         if (existingItem) {
//             setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + qtyToAdd } : item));
//         } else {
//             setCart([...cart, { ...product, qty: qtyToAdd }]);
//         }

//         // --- Fire off the dynamic notification tracking method ---
//         triggerToast(product.name, qtyToAdd);

//         // Reset card state counter back to 1
//         setQuantities({ ...quantities, [product.id]: 1 });
//     };

//     const handleCartCount = (totalItems) => {
//         setCartCount(totalItems);
//     }

//     // Automatically recalculate the total item count whenever the cart array changes
//     useEffect(() => {
//         const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
//         handleCartCount(totalItems)
//     }, [cart]);

//     // CRUD Updates Inside SideCart
//     const updateCartQty = (productId, operation) => {
//         setCart(cart.map(item => {
//             if (item.id === productId) {
//                 const newQty = operation === 'inc' ? item.qty + 1 : item.qty - 1;
//                 return newQty > 0 ? { ...item, qty: newQty } : item;
//             }
//             return item;
//         }).filter(item => item.qty > 0));
//     };

//     const removeFromCart = (productId) => {
//         setCart(cart.filter(item => item.id !== productId));
//     };

//     // Consolidate all cart properties into a single value object
//     const cartContextValue = {
//         cart,
//         setCart,
//         isCartOpen,
//         setIsCartOpen,
//         cartCount,
//         setCartCount,
//         updateCartQty,
//         removeFromCart,
//         quantities,
//         handleQtyChange,
//         addToCart
//     };

//     return (
//         <CartContext.Provider value={cartContextValue}>
//             {children}
//             {/* --- Global Toast Pop-up Stack Portal Render Node --- */}
//             <div className="toast-portal-container position-fixed bottom-4 start-4 d-flex flex-column gap-2 z-index-toast">
//                 {toasts.map(toast => (
//                     <div key={toast.id} className="modern-popup-toast p-3 rounded-3 shadow-lg bg-white border border-light-dark d-flex align-items-center justify-content-between gap-3 animate-slide-up-toast">
//                         <div className="d-flex align-items-center gap-2.5">
//                             <div className="toast-success-badge text-success bg-success-subtle p-1.5 rounded-circle d-inline-flex">
//                                 <CheckCircle2 size={16} />
//                             </div>
//                             <div className="text-start">
//                                 <p className="mb-0 text-dark fw-bold fs-7 lh-sm">Added to Order Cart</p>
//                                 <p className="mb-0 text-muted fs-8 mt-0.5 text-truncate-toast">
//                                     {toast.quantity}x {toast.productName}
//                                 </p>
//                             </div>
//                         </div>
//                         <button onClick={() => removeToast(toast.id)} className="btn p-1 text-muted hover-dark border-0 rounded-2 d-flex align-items-center justify-content-center" aria-label="Dismiss Alert">
//                             <X size={14} />
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </CartContext.Provider>
//     );
// }

// // Custom hook for clean, one-line context consumption in your components
// // eslint-disable-next-line react-refresh/only-export-components
// export function useCart() {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error('useCart must be utilized strictly within a CartProvider');
//     }
//     return context;
// }

/* eslint-disable react-hooks/set-state-in-effect */
import { CheckCircle2, X } from 'lucide-react';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Initialize the Context
const CartContext = createContext(null);

export function CartProvider({ children }) {
    // Lazy initial state retrieval function to ensure items survive page re-renders safely
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('ar_rahmoh_cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Local storage initialization failed", error);
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [quantities, setQuantities] = useState({});
    const [toasts, setToasts] = useState([]);

    // Keep LocalStorage continuously synchronized with the cart array state engine 
    useEffect(() => {
        try {
            localStorage.setItem('ar_rahmoh_cart', JSON.stringify(cart));
        } catch (error) {
            console.error("Failed syncing items to storage matrix", error);
        }
    }, [cart]);

    // Reusable trigger method to push unique alert messages to the track stack
    const triggerToast = (productName, quantity) => {
        const id = Date.now() + Math.random();
        const newToast = { id, productName, quantity };

        setToasts(prev => [...prev, newToast]);

        // Hardware-accelerated auto dismissal timer loop
        setTimeout(() => {
            setToasts(prev => prev.filter(toast => toast.id !== id));
        }, 3000);
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    // Independence Quantity Tracking Mutators
    const handleQtyChange = (productId, operation) => {
        const currentQty = quantities[productId] || 1;
        if (operation === 'inc') {
            setQuantities({ ...quantities, [productId]: currentQty + 1 });
        } else if (operation === 'dec' && currentQty > 1) {
            setQuantities({ ...quantities, [productId]: currentQty - 1 });
        }
    };
    // Cart Integration Mechanics
    const addToCart = (product) => {
        const qtyToAdd = quantities[product.id] || 1;
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + qtyToAdd } : item));
        } else {
            setCart([...cart, { ...product, qty: qtyToAdd }]);
        }

        // --- Fire off the dynamic notification tracking method ---
        triggerToast(product.name, qtyToAdd);

        // Reset card state counter back to 1
        setQuantities({ ...quantities, [product.id]: 1 });
    };

    const handleCartCount = (totalItems) => {
        setCartCount(totalItems);
    };

    // Automatically recalculate the total item count whenever the cart array changes
    useEffect(() => {
        const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
        handleCartCount(totalItems);
    }, [cart]);

    // CRUD Updates Inside SideCart
    const updateCartQty = (productId, operation) => {
        setCart(cart.map(item => {
            if (item.id === productId) {
                const newQty = operation === 'inc' ? item.qty + 1 : item.qty - 1;
                return newQty > 0 ? { ...item, qty: newQty } : item;
            }
            return item;
        }).filter(item => item.qty > 0));
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    // Consolidate all cart properties into a single value object
    const cartContextValue = {
        cart,
        setCart,
        isCartOpen,
        setIsCartOpen,
        cartCount,
        setCartCount,
        updateCartQty,
        removeFromCart,
        quantities,
        handleQtyChange,
        addToCart
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
            {/* --- Global Toast Pop-up Stack Portal Render Node --- */}
            <div className="toast-portal-container position-fixed bottom-4 start-4 d-flex flex-column gap-2 z-index-toast">
                {toasts.map(toast => (
                    <div key={toast.id} className="modern-popup-toast p-3 rounded-3 shadow-lg bg-white border border-light-dark d-flex align-items-center justify-content-between gap-3 animate-slide-up-toast">
                        <div className="d-flex align-items-center gap-2.5">
                            <div className="toast-success-badge text-success bg-success-subtle p-1.5 rounded-circle d-inline-flex">
                                <CheckCircle2 size={16} />
                            </div>
                            <div className="text-start">
                                <p className="mb-0 text-dark fw-bold fs-7 lh-sm">Added to Order Cart</p>
                                <p className="mb-0 text-muted fs-8 mt-0.5 text-truncate-toast">
                                    {toast.quantity}x {toast.productName}
                                </p>
                            </div>
                        </div>
                        <button onClick={() => removeToast(toast.id)} className="btn p-1 text-muted hover-dark border-0 rounded-2 d-flex align-items-center justify-content-center" aria-label="Dismiss Alert">
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>
        </CartContext.Provider>
    );
}

// Custom hook for clean, one-line context consumption in your components
// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be utilized strictly within a CartProvider');
    }
    return context;
}
