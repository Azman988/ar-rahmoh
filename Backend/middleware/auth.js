import jwt from 'jsonwebtoken';

const authenticateAdmin = (req, res, next) => {
    try {
        // Extract token payload from the Authorization Header block
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ 
                success: false, 
                message: 'Access Denied. Authorization signature missing.' 
            });
        }

        const token = authHeader.split(' ')[1];
        
        // Decode verify cryptographic parameters against your unique environment secret
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET || 'AR_RAHMOH_CRYPTO_KEY_88');
        
        // Append user contextual details safely to the request scope stream
        req.adminUser = verifiedUser;
        
        next(); // Proceed cleanly down the server pathway
    } catch (err) {
        console.error(err);

        return res.status(403).json({ 
            success: false, 
            message: 'Authentication rejected. Signature token has expired or is invalid.' 
        });
    }
};

export default authenticateAdmin;