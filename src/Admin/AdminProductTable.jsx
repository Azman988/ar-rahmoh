import React, { useEffect, useState, useMemo } from 'react';
import { Trash2, Edit3, ShoppingBag, ToggleLeft, ToggleRight, Loader2, Search, XCircle } from 'lucide-react';

export function AdminProductTable({ onEditTrigger, refreshTrigger, setActiveTab }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [actionId, setActionId] = useState(null);
    const [tableFilter, setTableFilter] = useState('');

    // Fetch live product catalog from backend API on component mount and whenever refreshTrigger changes
    useEffect(() => {
        const fetchLiveCatalog = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/v1/admin/products');
                const result = await res.json();
                if (res.ok) setProducts(result.data || []);
            } catch (err) {
                console.error("Error drawing live records:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchLiveCatalog();
    }, [refreshTrigger]);

    // Live search loop functionality: parses rows instantly
    const filteredRows = useMemo(() => {
        const query = tableFilter.toLowerCase().trim();
        if (!query) return products;
        return products.filter(p => p.name.toLowerCase().includes(query) || (p.composition && p.composition.toLowerCase().includes(query)));
    }, [products, tableFilter]);

    const handleDeleteProduct = async (id) => {
        if (!window.confirm("Are you sure you want to delete this medication?")) return;
        setActionId(id);
        try {
            const token = localStorage.getItem('ar_rahmoh_admin_token');
            const res = await fetch(`/api/v1/admin/products/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) setProducts(prev => prev.filter(p => p._id !== id));
        } catch (err) { console.error(err); }
        setActionId(null);
    };

    const handleToggleStock = async (product) => {
        try {
            const token = localStorage.getItem('ar_rahmoh_admin_token');
            const res = await fetch(`/api/v1/admin/products/${product._id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ inStock: !product.inStock })
            });

            if (res.status === 403) {
                return alert("Access denied: You do not have admin privileges, or your session has expired. Please log in again.");
            }

            if (res.ok) setProducts(prev => prev.map(p => p._id === product._id ? { ...p, inStock: !p.inStock } : p));
        } catch (err) { console.error(err); }
    };

    // Trigger the edit form with the selected product's data and switch to the upload tab
    const handleEditTrigger = (product) => {
        onEditTrigger(product);
        setActiveTab('EditTab');
    }

    if (loading) {
        return (
            <div className="text-center py-5 bg-white rounded-4 border my-4">
                <Loader2 className="animate-spin text-success mx-auto mb-2" size={28} />
                <p className="text-muted fs-7">Fetching product data...</p>
            </div>
        );
    }

    return (
        <div className="admin-upload-card p-4 rounded-4 shadow-sm bg-white border border-light-dark mt-4 animate-fade-in">
            {/* Header Control Row containing full internal filter mechanics */}
            <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3 mb-4 pb-2 border-bottom">
                <div className="d-flex align-items-center gap-2">
                    <ShoppingBag className="text-success" size={20} />
                    <h3 className="fw-extrabold text-dark-emerald fs-5 mb-0">Product Data Table</h3>
                </div>

                <div className="position-relative w-100" style={{ maxWidth: '260px' }}>
                    <Search size={16} className="position-absolute top-50 start-3 ms-3 translate-middle-y text-muted pe-none" />
                    <input type="text" value={tableFilter} onChange={(e) => setTableFilter(e.target.value)} className="form-control ps-5 py-1.5 fs-7 rounded-pill" placeholder="Filter rows layout..." />
                </div>
            </div>

            {filteredRows.length === 0 ? (
                <div className="text-center py-4 text-muted fs-7 d-flex flex-column align-items-center gap-1">
                    <XCircle size={28} className="text-warning opacity-50" />
                    <span>No matching row indices found. Try refreshing the page.</span>
                </div>
            ) : (
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0 text-start fs-7">
                        <thead className="table-light">
                            <tr className="text-dark-emerald">
                                <th style={{ width: '80px' }}>Preview</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Stock Status</th>
                                <th className="text-center" style={{ width: '120px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRows.map(product => (
                                <tr key={product._id}>
                                    <td>
                                        <div className="table-img-frame border rounded-2 overflow-hidden bg-light d-flex align-items-center justify-content-center">
                                            <img src={product.img} alt="" className="img-fluid object-fit-cover" style={{ width: 44, height: 44 }} />
                                        </div>
                                    </td>
                                    <td><span className="fw-bold text-dark-emerald">{product.name}</span></td>
                                    <td className="fw-semibold text-dark">₦{Number(product.price).toLocaleString()}</td>
                                    <td>
                                        <button onClick={() => handleToggleStock(product)} className="btn p-0 border-0 d-flex align-items-center gap-1.5 link-dark-emerald text-start">
                                            {product.inStock ? (
                                                <span className="badge bg-success-subtle text-success rounded-pill fw-medium d-inline-flex align-items-center gap-1"><ToggleRight size={14} /> Instock</span>
                                            ) : (
                                                <span className="badge bg-danger-subtle text-danger rounded-pill fw-medium d-inline-flex align-items-center gap-1"><ToggleLeft size={14} /> Sold Out</span>
                                            )}
                                        </button>
                                    </td>
                                    <td>
                                        <div className="d-flex justify-content-center gap-1">
                                            <button onClick={() => handleEditTrigger(product)} className="btn btn-sm btn-outline-secondary p-1.5 rounded-2 d-inline-flex align-items-center justify-content-center table-action-btn"><Edit3 size={14} /></button>
                                            <button onClick={() => handleDeleteProduct(product._id)} disabled={actionId === product._id} className="btn btn-sm btn-outline-danger p-1.5 rounded-2 d-inline-flex align-items-center justify-content-center table-action-btn">
                                                {actionId === product._id ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
