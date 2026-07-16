import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export function ProtectedAdminRoute() {
    // Collect session tracking validation markers from client local memory lanes
    const adminToken = localStorage.getItem('ar_rahmoh_admin_token');
    const adminRole = localStorage.getItem('ar_rahmoh_admin_role');

    // Determine authorization status metrics
    const isAuthorized = adminToken && adminRole === 'superadmin';

    // Guard mechanism action: If authentication tests fall flat, force routing context back to gate
    return isAuthorized ? <Outlet /> : <Navigate to="/admin/login" replace />;
}
