import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FilePlus2, TableProperties, LogOut, Menu, X } from 'lucide-react';
import Logo from '../../assets/ar-Rahmoh-logo.webp';
import './AdminHeader.css';

export function AdminHeader({ activeTab, setActiveTab }) {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // --- LOGOUT FUNCTIONALITY ---
    const handleLogout = () => {
        // Clear all admin session tokens and redirect to login page
        localStorage.removeItem('ar_rahmoh_admin_token');
        navigate('/admin/login', { replace: true });
    };

    const selectTab = (tabName) => {
        setActiveTab(tabName);
        setMobileMenuOpen(false);
    };

    return (
        <header className="admin-header position-sticky top-0 z-index-4">
            <div className='container-fluid container-max d-flex align-items-center justify-content-between py-3 px-4 admin-header-nav'>
                {/* Brand Identifier */}
                <div className="d-flex align-items-center gap-2">
                    <div className="logo-box">
                        <Link to="/" end="true">
                            <img src={Logo} alt="arRahmoh-logo" style={{ width: 50, height: 50, borderRadius: 10 }} />
                        </Link>
                    </div>
                    <div className="brand-text">
                        <h1 className='text-white m-0 fs-6 fw-bold'>Ar-Rahmoh</h1>
                        <span className="text-light fs-8">Management Core v1.0</span>
                    </div>
                </div>

                {/* --- DESKTOP NAVIGATION --- */}
                <nav className="admin-nav-tabs d-none d-md-flex">
                    <button
                        type="button"
                        className={`nav-tab-btn ${activeTab === 'EditTab' ? 'active' : ''}`}
                        onClick={() => selectTab('EditTab')}
                    >
                        <FilePlus2 size={18} />
                        <span>Edit Tab</span>
                    </button>

                    <button
                        type="button"
                        className={`nav-tab-btn ${activeTab === 'table' ? 'active' : ''}`}
                        onClick={() => selectTab('table')}
                    >
                        <TableProperties size={18} />
                        <span>Data Table</span>
                    </button>
                </nav>

                {/* --- RIGHT ACTION ZONE --- */}
                <div className="admin-actions-zone d-flex align-items-center gap-2">
                    {/* Terminal Button */}
                    <button type="button" className="btn d-md-flex d-none align-items-center justify-content-center gap-1 py-2 px-3 text-light fw-semibold admin-logout-btn hover-danger-btn" onClick={handleLogout}>
                        <LogOut size={18} />
                        <span>Log Out</span>
                    </button>

                    {/* Mobile Toggle Trigger */}
                    <button
                        type="button"
                        className="btn mobile-menu-toggle d-md-none text-light p-2 d-flex align-items-center justify-content-center"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* --- MOBILE DROP-DOWN --- */}
            {mobileMenuOpen && (
                <div className="mobile-admin-drawer d-md-none animate-fade-in">
                    <div className="p-3 d-flex flex-column gap-2">
                        <button
                            type="button"
                            className={`mobile-nav-btn ${activeTab === 'EditTab' ? 'active' : ''}`}
                            onClick={() => selectTab('EditTab')}
                        >
                            <FilePlus2 size={18} />
                            <span>Edit Tab</span>
                        </button>

                        <button
                            type="button"
                            className={`mobile-nav-btn ${activeTab === 'table' ? 'active' : ''}`}
                            onClick={() => selectTab('table')}
                        >
                            <TableProperties size={18} />
                            <span>Data Table</span>
                        </button>

                        <hr className="border-secondary my-2" />

                        <button type="button" className="mobile-nav-btn mobile-logout text-danger" onClick={handleLogout}>
                            <LogOut size={18} />
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
