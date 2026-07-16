import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, AlertTriangle, RefreshCw } from 'lucide-react';
import './AdminUpload.css';

export function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            const response = await fetch('/api/v1/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Invalid administrative credentials verification.');

            // Safely assign JWT tokens and status credentials to localStorage nodes
            localStorage.setItem('ar_rahmoh_admin_token', result.token);
            localStorage.setItem('ar_rahmoh_admin_role', result.role);

            // Access granted: Route straight to the secure upload board canvas
            navigate('/admin/dashboard/upload');
        } catch (err) {
            setErrorMsg(err.message || 'A routing error interrupted the gate check pathway.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container min-vh-100 d-flex align-items-center justify-content-center px-3 animate-fade-in">
            <div className="admin-upload-card p-4 rounded-4 shadow bg-white border border-light-dark w-100 max-w-400 text-center">
                <div className="icon-badge-round text-success bg-success-subtle mx-auto mb-3 d-flex align-items-center justify-content-center">
                    <ShieldCheck size={24} />
                </div>
                <h3 className="fw-extrabold text-dark-emerald mb-1 fs-4">Admin Security Gate</h3>
                <p className="text-muted fs-7 mb-4">Authorized Clinic Personnel System Authentication Portal</p>

                {errorMsg && (
                    <div className="p-3 rounded-3 mb-3 d-flex gap-2 align-items-center fs-7 bg-danger-subtle text-danger border border-danger border-opacity-25 text-start">
                        <AlertTriangle size={16} className="flex-shrink-0" />
                        <span className="fw-medium">{errorMsg}</span>
                    </div>
                )}

                <form onSubmit={handleLoginSubmit} className="d-flex flex-column gap-3 text-start fs-7">
                    <div>
                        <label className="fw-bold text-dark-emerald mb-1">Administrative Email</label>
                        <div className="position-relative">
                            <Mail size={16} className="position-absolute top-50 start-5 ms-3 translate-middle-y text-muted" />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control rounded-3 ps-5 fs-7" placeholder="admin@mail.com" required />
                        </div>
                    </div>
                    <div>
                        <label className="fw-bold text-dark-emerald mb-1">Security Password</label>
                        <div className="position-relative">
                            <Lock size={16} className="position-absolute top-50 start-5 ms-3 translate-middle-y text-muted" />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control rounded-3 ps-5 fs-7" placeholder="••••••••" required />
                        </div>
                    </div>
                    <button type="submit" disabled={loading} className="btn btn-success py-2.5 fw-bold text-uppercase tracking-wide rounded-3 w-100 mt-2 shadow-sm d-flex align-items-center justify-content-center gap-2">
                        {loading ? <RefreshCw size={16} className="animate-spin" /> : null}
                        {loading ? 'Verifying Credentials...' : 'Authenticate Access'}
                    </button>
                </form>
            </div>
        </div>
    );
}
