// import * as cloudinary from 'cloudinary';
// import CloudinaryStorage from 'multer-storage-cloudinary';
// import multer from 'multer';

// // Production Configuration Check: Ensure variables are loaded
// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary.v2,
//     params: {
//         folder: 'ar_rahmoh_production_catalog',
//         allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
//         transformation: [{ width: 800, height: 800, crop: 'limit', quality: 'auto', fetch_format: 'auto' }]
//     }
// });

// // Production File Validator Framework
// const fileFilter = (req, file, cb) => {
//     const acceptableMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//     if (acceptableMimeTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error('Invalid payload type. Only JPEG, JPG, PNG, and WEBP formats are accepted.'), false);
//     }
// };

// const uploadPipeline = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: { fileSize: 3 * 1024 * 1024 } // Strict 3MB hard ceiling block
// });

// export default uploadPipeline;


// import { v2 as cloudinary } from 'cloudinary'; 
// import CloudinaryStorage  from 'multer-storage-cloudinary'; // Named import fix
// import multer from 'multer';
// import dotenv from 'dotenv';

// dotenv.config();

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary, 
//     params: {
//         folder: 'ar_rahmoh_production_catalog',
//         allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
//         transformation: [{ width: 800, height: 800, crop: 'limit', quality: 'auto', fetch_format: 'auto' }]
//     }
// });

// // Production File Validator Framework
// const fileFilter = (req, file, cb) => {
//     const acceptableMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
//     if (acceptableMimeTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(new Error('Invalid payload type. Only JPEG, JPG, PNG, and WEBP formats are accepted.'), false);
//     }
// };

// const uploadPipeline = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: { fileSize: 3 * 1024 * 1024 } // Strict 3MB hard ceiling block
// });

// export default uploadPipeline;


import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Force environment variables to load first
dotenv.config();

// Configure the native Cloudinary SDK engine
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Use native Memory Storage instead of third-party plugins
const storage = multer.memoryStorage();

// File Type Validator Framework
const fileFilter = (req, file, cb) => {
    const acceptableMimeTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (acceptableMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid payload type. Only JPEG, JPG, PNG, and WEBP formats are accepted.'), false);
    }
};

// Memory upload pipeline engine
const uploadMemory = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 3 * 1024 * 1024 } // 3MB Ceiling Limit
});

// Custom middleware wrapper to handle the streaming step to Cloudinary
export const uploadPipeline = (req, res, next) => {
    // 1. Process the standard multi-part form data validation checks
    uploadMemory.single('productImage')(req, res, (err) => {
        if (err) return res.status(400).json({ success: false, message: err.message });
        if (!req.file) return next(); // No file passed, forward to controller cleanly

        // 2. Stream the binary buffer safely straight to Cloudinary pipelines
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: 'ar_rahmoh_production_catalog',
                transformation: [{ width: 800, height: 800, crop: 'limit', quality: 'auto', fetch_format: 'auto' }]
            },
            (error, result) => {
                if (error) {
                    return res.status(500).json({ success: false, message: 'Cloudinary upload pipe broken.', error: error.message });
                }

                // 3. Re-attach output variables to mimic original multer properties for your controller
                req.file.path = result.secure_url;
                req.file.filename = result.public_id;
                next();
            }
        );

        // Send the file buffer through the stream pipeline
        stream.end(req.file.buffer);
    });
};

export default uploadPipeline;
