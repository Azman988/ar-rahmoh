import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import our route ecosystem
import adminRoutes from './Backend/routes/adminRoutes.js'; 

dotenv.config();

const app = express();

// Database Connections & Operational Listener Activation
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ar_rahmoh_db";

// Secure Global Application Middleware layers
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Allow cookies 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Core Architectural Service Endpoint Handlers
app.use('/api/v1/admin', adminRoutes);

// Catch-All Global Express Runtime Error Boundary
app.use((err, req, res,) => {
    console.error("Critical Execution Fault:", err.message);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "An underlying server failure tripped network pathways."
    });
});

// Resolve directory paths safely for native Node ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// --- STATIC ASSET RENDER HOSTING PIPELINE ---
if (process.env.NODE_ENV === 'production') {
    // Tell Express where the compiled production frontend build files live
    app.use(express.static(path.join(__dirname, './dist')));

    // Direct all non-API routes straight back to React SPA index file
    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
}

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("🎯 MongoDB Database pipeline calibrated successfully.");
        app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Production backend operating on port: ${PORT}`));
    })
    .catch(err => {
        console.error("❌ Mongoose core adapter initialization blocked:", err.message);
        process.exit(1);
    });
