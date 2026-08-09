import express from 'express';
import upload from '../middleware/upload.js';
import adminAuth from '../middleware/auth.js';
import adminController from '../controllers/adminController.js';
import adminLoginHandler from '../controllers/authController.js';

const router = express.Router();

router.post('/login', adminLoginHandler);

// All mutations are protected by the secure middleware signature validation token checkpoint
router.route('/products')
    .post(adminAuth, upload, adminController.createProduct)
    .get(adminController.getAllProducts);

router.route('/products/:id')
    .get(adminController.getSingleProduct)
    .put(adminAuth, upload, adminController.updateProduct)
    .delete(adminAuth, adminController.deleteProduct);

export default router;
