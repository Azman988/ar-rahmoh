import React, { useMemo, useState, useEffect } from 'react';
import { ShoppingBag, AlertCircle, Search, HelpCircle, ChevronDown, Layers } from 'lucide-react';
import './Product.css';
import { ProductSkeleton } from './ProductCard/ProductSkeleton';
import { ProductCatalog } from './ProductCard/ProductCard';
import { useCart } from './CartContext';
import { ProductModal } from './ProductModal';

export function Product() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);
    const [activeProduct, setActiveProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [appliedQuery, setAppliedQuery] = useState('');
    const { addToCart } = useCart();

    // --- Pagination Properties Configuration ---
    const ITEMS_PER_PAGE = 12;
    const [visibleLimit, setVisibleLimit] = useState(ITEMS_PER_PAGE);

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

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (!e.target.value.trim()) {
            setAppliedQuery('');
        }
    };

    // Filter array loop structure matching your dataset properties
    const filteredProducts = useMemo(() => {
        // Safe guard check: if products is null/uninitialized, return an empty array
        if (!products) return [];
        if (!appliedQuery.trim()) return products;

        const cleanQuery = appliedQuery.toLowerCase().trim();
        return products.filter(product => {
            return (
                product.name.toLowerCase().includes(cleanQuery) ||
    (product.composition && product.composition.toLowerCase().includes(cleanQuery)) ||
    (product.desc && product.desc.some(d => d.option.toLowerCase().includes(cleanQuery)))
            );
        });
    }, [appliedQuery, products]);

    // Reset pagination window limits instantly back to default when queries alter
    useEffect(() => {
        const setLimit = () => {
            setVisibleLimit(ITEMS_PER_PAGE);
        }
        setLimit();
    }, [appliedQuery]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setAppliedQuery(searchQuery);
        }
    };

    // FIXED: Slice array index bounds dynamically using filteredProducts instead of raw products
    const displayedProducts = useMemo(() => {
        return filteredProducts.slice(0, visibleLimit);
    }, [filteredProducts, visibleLimit]);

    const handleLoadMore = () => {
        setVisibleLimit(prev => prev + ITEMS_PER_PAGE);
    };

    return (
        <section className="product-catalog-section bg-light-subtle pb-5">
            {/* Page Hero Banner Overlay */}
            <div className="position-relative overflow-hidden product-hero-banner mb-5">
                <img
                    src="./product.webp"
                    alt="Our Products"
                    className="w-100 img-fluid product-hero-img"
                />
                <div className="position-absolute top-0 start-0 end-0 bottom-0 product-overlay d-flex align-items-center justify-content-center">
                    <h1 className="text-white fw-extrabold text-uppercase tracking-wider display-5 text-center px-3">
                        Our Medications
                    </h1>
                </div>
            </div>

            <div className="container-fluid container-max">
                {/* Introduction Summary Block */}
                <div className="text-center px-xl-5 mb-5 mx-auto max-w-800">
                    <span className="text-success fw-bold text-uppercase fs-7 tracking-wider mb-2 d-block pe-none">
                        100% Natural Formulations
                    </span>
                    <p className="fs-6 text-dark-emerald fw-medium lh-base mb-0">
                        Our curated inventory comprises a wide range of holistic treatments including organic herbal solutions, prophetic nutrients, spiritual remedies, and metabolic dietetics.
                    </p>
                </div>

                {/* --- Main Product Section Header --- */}
                <div className="mb-4 pb-3 border-bottom border-light-dark d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3">
                    <div className="d-flex align-items-center gap-2">
                        <ShoppingBag className="text-success flex-shrink-0" size={24} />
                        <h3 className="fw-extrabold text-dark-emerald mb-0 fs-4">Shop Catalog</h3>
                    </div>

                    {/* Search Input Bar (Press Enter to Trigger) */}
                    <div className="search-input-wrapper position-relative w-100">
                        <Search
                            size={18}
                            className="search-icon-anchor position-absolute top-50 translate-middle-y text-muted"
                        />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Search medications, herbs, diets..."
                            className="form-control premium-search-input w-100 rounded-pill fs-7 bg-light-subtle"
                        />
                    </div>
                </div>

                {/* --- Conditional Grid & Fallback Rendering Loop --- */}
                {loading ? (
                    <div className="row g-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-4">
                        <ProductSkeleton />
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="text-center py-5 my-5 max-w-600 mx-auto rounded-4 border bg-white shadow-sm p-4 animate-fade-in">
                        <HelpCircle size={44} className="text-warning mx-auto mb-3 opacity-75" />
                        <h4 className="fw-bold text-dark-emerald mb-1 fs-5">No Matching Items Sighted</h4>
                        <p className="text-muted fs-7 mb-0">
                            We couldn't locate therapeutic treatments matching <strong className="text-success">"{appliedQuery}"</strong>. Please verify spelling rules or check our diagnostic criteria keys.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="row g-4 row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center mb-4">
                            <ProductCatalog products={displayedProducts} setActiveProduct={setActiveProduct} />
                        </div>

                        {/* --- Dynamic Pagination Summary & Control Module --- */}
                        <div className="d-flex flex-column align-items-center justify-content-center gap-2 mt-4 mb-5 text-center w-100 animate-load-in">
                            <span className="text-muted fs-7 d-inline-flex align-items-center gap-1 fw-medium">
                                <Layers size={14} className="text-success-light" />
                                Showing <strong className="text-dark-emerald"> {displayedProducts.length} </strong> of <strong className="text-dark-emerald"> {filteredProducts.length} </strong> Available Products
                            </span>

                            {visibleLimit < filteredProducts.length && (
                                <button
                                    onClick={handleLoadMore}
                                    className="btn btn-load-more d-inline-flex align-items-center gap-2 px-4 py-2.5 rounded-pill fw-bold text-uppercase fs-7 border border-success text-success shadow-sm transition-all mt-1"
                                >
                                    <span>Load More Products</span>
                                    <ChevronDown size={16} className="load-more-arrow" />
                                </button>
                            )}
                        </div>
                    </>
                )}

                {/* Modern Clinical Disclaimer Module Card */}
                <div className="max-w-800 mx-auto p-3 rounded-3 border border-danger-subtle bg-danger-subtle bg-opacity-10 d-flex gap-3 align-items-center mt-5">
                    <AlertCircle size={22} className="text-danger flex-shrink-0" />
                    <p className="mb-0 text-muted fs-7 lh-base">
                        <strong className="text-danger">Medical Disclaimer:</strong> All our alternative wellness products are 100% natural, premium grade, and inspired strictly by authentic traditional Islamic values. They are intentionally designed to support your body's constitutional wellness networks naturally. Make sure to double-check the physical label to confirm product names, values, and instructions.
                    </p>
                </div>

                {/* Product Modal for Product Details */}
                {activeProduct && (
                    <ProductModal
                        product={activeProduct}
                        addToCart={addToCart}
                        close={() => setActiveProduct(null)}
                    />
                )}
            </div>
        </section>
    );
}