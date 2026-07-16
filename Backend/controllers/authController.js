import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Force immediate synchronization of environmental assets before checking credentials
dotenv.config();

const adminLoginHandler = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Please supply all login criteria items." });
        }

        // Fetch values inside the request execution scope to ensure latest .env values are captured
        const ADMIN_EMAIL = process.env.VITE_ADMIN_EMAIL;
        const ADMIN_PASSWORD = process.env.VITE_ADMIN_PASSWORD;
        const JWT_SECRET = process.env.JWT_SECRET;

        // CRITICAL PROTECTION SHIELD: If configuration parameters fail to load, block access instantly
        // This stops attackers from logging in with empty fields or default values if the .env file is offline
        if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !JWT_SECRET) {
            console.error("CRITICAL ALARM: Server environment configurations missing or uninitialized.");
            return res.status(500).json({ 
                success: false, 
                message: "Authentication subsystem error. System initialization failure." 
            });
        }

        // Validate credentials against verified environment variables
        if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: "Invalid email parameters or security credentials." });
        }

        // Generate encrypted JWT payload signature block
        const tokenToken = jwt.sign(
            { email: ADMIN_EMAIL, role: 'superadmin' },
            JWT_SECRET,
            { expiresIn: '8h' } 
        );

        res.status(200).json({
            success: true,
            message: "Authentication checklist passed safely.",
            token: tokenToken,
            role: 'superadmin'
        });
    } catch (error) {
        next(error);
    }
};

export default adminLoginHandler;
