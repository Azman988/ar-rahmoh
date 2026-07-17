import 'dotenv/config'; 

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Import our route ecosystem
import adminRoutes from './Backend/routes/adminRoutes.js'; 

const app = express();

// Resolve directory paths safely for native Node ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database Connections & Operational Listener Activation
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Secure Global Application Middleware layers
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow cookies 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Asset Hosting for Production Builds
if (process.env.NODE_ENV === 'production') {
    // Tell Express where the compiled production frontend build files live
    app.use(express.static(path.resolve(__dirname, 'dist')));
}

// Core Architectural Service Endpoint Handlers
app.use('/api/v1/admin', adminRoutes);

// Direct all non-API routes back to React SPA index file for client-side routing
if (process.env.NODE_ENV === 'production') {
    // Direct all non-API routes straight back to React SPA index file
    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
}

// Catch-All Global Express Runtime Error Boundary
app.use((err, req, res, next) => {
    console.error("Critical Execution Fault:", err.message);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "An underlying server failure tripped network pathways."
    });
    next();
});


mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("🎯 MongoDB Database pipeline calibrated successfully.");
        app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Production backend operating on port: ${PORT}`));
    })
    .catch(err => {
        console.error("❌ Mongoose core adapter initialization blocked:", err.message);
        process.exit(1);
    });
