import React, { useState } from 'react';
import { PlusCircle, FileImage, ShieldAlert, CheckCircle, Trash2, Layers, RefreshCw } from 'lucide-react';
import './AdminUpload.css';
import { AdminProductTable } from './AdminProductTable';
import { AdminHeader } from './AdminHeader/AdminHeader';

export function AdminUpload() {
    const [activeTab, setActiveTab] = useState('EditTab');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [composition, setComposition] = useState('');
    const [benefits, setBenefits] = useState('');
    const [usage, setUsage] = useState('');
    const [inStock, setInStock] = useState(true);

    // Image Upload & Preview Processing States
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);

    // --- NEW REFRESH AND EDIT TRACKING STATES ---
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [editingProductId, setEditingProductId] = useState(null);

    // --- NEW EDIT TRIGGER AND REFRESH FUNCTIONS ---
    const handleEditTrigger = (product) => {
        setEditingProductId(product._id);
        setName(product.name);
        setPrice(product.price);
        setComposition(product.composition || '');
        setBenefits(product.benefits || '');
        setUsage(product.usage || '');
        setInStock(product.inStock);

        if (product.img) {
            setImagePreview(product.img);
            setImageFile(null); // Keep null until they upload a brand new file
        }

        setStatusMsg({ type: 'info', text: `Currently editing: ${product.name}` });
    };

    const triggerDataRefresh = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    const cancelEditMode = () => {
        setEditingProductId(null);
        setName(''); setPrice(''); setComposition(''); setBenefits(''); setUsage(''); setInStock(true);
        clearImageTrack();
        setStatusMsg({ type: '', text: '' });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Secure file capacity filtering constraint logic (Max 3MB)
        if (file.size > 3 * 1024 * 1024) {
            setStatusMsg({ type: 'error', text: 'Image file bounds exceeded. Max capacity token limit is 3MB.' });
            clearImageTrack();
            return;
        }

        setImageFile(file);

        // Generate a memory-efficient local object URI for instant client rendering preview
        const localBlobUrl = URL.createObjectURL(file);
        setImagePreview(localBlobUrl);
        setStatusMsg({ type: '', text: '' });
    };

    const clearImageTrack = () => {
        setImageFile(null);
        if (imagePreview) URL.revokeObjectURL(imagePreview); // Clean memory arrays safely
        setImagePreview(null);
        const fileInput = document.getElementById('adminFileInput');
        if (fileInput) fileInput.value = '';
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!name || !price || !imageFile) {
            setStatusMsg({ type: 'error', text: 'Please fulfill all compulsory catalog parameters.' });
            setTimeout(() => setStatusMsg({ type: '', text: '' }), 4000);
            return;
        }

        setLoading(true);
        setStatusMsg({ type: '', text: '' });

        // Build Multi-Part structural entity format payload stream
        const formData = new FormData();
        formData.append('name', name.trim());
        formData.append('price', Number(price));
        formData.append('composition', composition.trim());
        formData.append('benefits', benefits.trim());
        formData.append('usage', usage.trim());
        formData.append('inStock', inStock);
        formData.append('productImage', imageFile);

        try {
            const token = localStorage.getItem('ar_rahmoh_admin_token');

            // Dynamically route network configurations based on active edit modes
            const targetUrl = editingProductId
                ? `/api/v1/admin/products/${editingProductId}` // Hits the PUT /:id configuration route
                : '/api/v1/admin/products';                    // Hits the standard POST collection route

            const targetMethod = editingProductId ? 'PUT' : 'POST';

            const response = await fetch(targetUrl, {
                method: targetMethod,
                headers: {
                    'Authorization': `Bearer ${token}` // Secure handshake verification protocol
                },
                body: formData
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Server rejected catalog processing track.');

            setStatusMsg({ type: 'success', text: 'Product submitted successfully!' });
            setTimeout(() => setStatusMsg({ type: '', text: '' }), 4000);

            // Clear layout fields cleanly
            setName(''); setPrice(''); setComposition(''); setBenefits(''); setUsage(''); setInStock(true);
            clearImageTrack();

            // Trigger a refresh to update the product table with the new entry
            triggerDataRefresh();
        } catch (error) {
            setStatusMsg({ type: 'error', text: error.message || 'A transmission leak disrupted operations.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <AdminHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="container-fluid container-max py-5 animate-fade-in">
                {/* Render the core navigation utility */}
                {activeTab === 'EditTab' && (
                    <div className="row g-4">
                        {/* Main Inputs Form */}
                        <div className="col-12 col-lg-7">
                            <div className="admin-upload-card p-4 rounded-4 shadow-sm bg-white border border-light-dark">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-4 pb-2 border-bottom">
                                    <h2 className="fw-extrabold text-dark-emerald fs-5 mb-0">{editingProductId ? `Editing Product` : 'Add New Product'}</h2>
                                    <PlusCircle className="text-success" size={22} />
                                </div>

                                {statusMsg.text && (
                                    <div className={`p-3 rounded-3 mb-3 d-flex gap-2 align-items-center fs-7 ${statusMsg.type === 'error' ? 'bg-danger-subtle text-danger border-danger' : 'bg-success-subtle text-success border-success'} border`}>
                                        {statusMsg.type === 'error' ? <ShieldAlert size={16} className="flex-shrink-0" /> : <CheckCircle size={16} className="flex-shrink-0" />}
                                        <span className="fw-medium">{statusMsg.text}</span>
                                    </div>
                                )}

                                <form onSubmit={handleFormSubmit} className="d-flex flex-column gap-3 fs-7">
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-8">
                                            <label className="fw-bold text-dark-emerald mb-1">Product Name *</label>
                                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control rounded-3" placeholder="e.g. Cardio Cure" required />
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <label className="fw-bold text-dark-emerald mb-1">Price (₦) *</label>
                                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control rounded-3" placeholder="e.g. 5000" required />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="fw-bold text-dark-emerald mb-1">Compositions</label>
                                        <textarea value={composition} onChange={(e) => setComposition(e.target.value)} className="form-control rounded-3 rows-custom" placeholder="Type compositions and seperate with commas,..." />
                                    </div>
                                    <div>
                                        <label className="fw-bold text-dark-emerald mb-1">Benefits</label>
                                        <textarea value={benefits} onChange={(e) => setBenefits(e.target.value)} className="form-control rounded-3 rows-custom" placeholder="Type benefits and seperate with commas,..." />
                                    </div>
                                    <div>
                                        <label className="fw-bold text-dark-emerald mb-1">Usage Directions</label>
                                        <textarea value={usage} onChange={(e) => setUsage(e.target.value)} className="form-control rounded-3 rows-custom" placeholder="Dosage timelines..." />
                                    </div>
                                    <div>
                                        <label className="fw-bold text-dark-emerald mb-1">Select Image *</label>
                                        <input type="file" id="adminFileInput" accept="image/*" onChange={handleFileChange} className="form-control rounded-3 fs-7" required={!imageFile} />
                                    </div>
                                    <div className="form-check form-switch mt-1">
                                        <input className="form-check-input check-success-switch" type="checkbox" checked={inStock} onChange={(e) => setInStock(e.target.checked)} id="adminStockControl" />
                                        <label className="form-check-label fw-bold text-dark-emerald" htmlFor="adminStockControl">Set Stock Availability</label>
                                    </div>
                                    <button type="submit" disabled={loading} className="btn py-2.5 fw-bold text-uppercase tracking-wide rounded-3 w-100 mt-2 shadow-sm d-flex align-items-center justify-content-center gap-2 publish-btn">
                                        {loading ? 'Streaming Data Layers...' : 'Publish to Catalog'}
                                    </button>
                                    {editingProductId && (
                                        <button type="button" onClick={cancelEditMode} className="btn py-2.5 fw-bold text-uppercase tracking-wide rounded-3 border-danger text-danger shadow-sm hover-danger-btn cancel-edit-btn">Cancel Edit Mode
                                        </button>
                                    )}
                                </form>
                            </div>
                        </div>

                        {/* Live Image Preview Dashboard Frame */}
                        <div className="col-12 col-lg-5">
                            <div className="admin-upload-card p-4 rounded-4 shadow-sm bg-white border border-light-dark h-100 d-flex flex-column align-items-center justify-content-center text-center text-muted min-h-350">
                                {imagePreview ? (
                                    <div className="w-100 h-100 d-flex flex-column justify-content-between align-items-center animate-fade-in position-relative">
                                        <div className="preview-image-container border rounded-3 overflow-hidden bg-light shadow-inner mb-3 w-100 h-100 d-flex align-items-center justify-content-center">
                                            <img src={imagePreview} alt="Live Catalog Stream Preview" className="img-fluid object-fit-cover w-100 h-100" />
                                        </div>
                                        <div className="w-100">
                                            <h6 className="text-dark-emerald fw-bold mb-1 fs-6 text-truncate w-100 px-2">{name || 'Unnamed Specification'}</h6>
                                            <p className="text-success fw-extrabold mb-3">₦{Number(price || 0).toLocaleString()}</p>
                                            <p className="text-muted fs-8 mb-1">{composition || 'No composition specified'}</p>
                                            <p className="text-muted fs-8 mb-1">{benefits || 'No benefits specified'}</p>
                                            <p className="text-muted fs-8 mb-3">{usage || 'No usage instructions specified'}</p>
                                            <button onClick={clearImageTrack} className="btn btn-link text-danger text-decoration-none fw-semibold d-inline-flex align-items-center gap-2 fs-7 border border-danger-subtle px-3 py-1.5 rounded-pill bg-danger-subtle bg-opacity-10 transition-all hover-danger-btn">
                                                <Trash2 size={14} /> Clear Selection
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-4 d-flex flex-column align-items-center gap-2">
                                        <FileImage size={48} className="text-muted opacity-25 mb-1" />
                                        <h5 className="fw-bold text-dark-emerald fs-6 mb-1">Asset Rendering Canvas</h5>
                                        <p className="fs-8 text-muted mb-0 max-w-250">Attach a physical `.webp`, `.png`, or `.jpeg` file configuration to generate a matching catalog asset live mock visualization layout preview.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'table' && (
                    <AdminProductTable onEditTrigger={handleEditTrigger} refreshTrigger={refreshTrigger} setActiveTab={setActiveTab} />
                )}
            </div>
        </>

    )
}

