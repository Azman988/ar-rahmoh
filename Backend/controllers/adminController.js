import Product from '../models/Product.js';
import { v2 as cloudinary } from 'cloudinary';

const createProduct = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Compulsory product graphic asset is missing." });
        }
        
        const { name, price, composition, benefits, usage, inStock } = req.body;
        
        const product = await Product.create({
            name,
            price: Number(price),
            composition: composition || "",
            benefits: benefits || "",
            usage: usage || "",
            inStock: inStock === 'true' || inStock === true,
            img: req.file.path,
            cloudinaryId: req.file.filename
        });

        res.status(201).json({ success: true, data: product });
    } catch (error) { 
        next(error); 
    }
};

const getAllProducts = async (req, res, next) => {
    try {
        const productList = await Product.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, count: productList.length, data: productList });
    } catch (error) { 
        next(error); 
    }
};

const getSingleProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        
        if (!product) {
            return res.status(404).json({ success: false, message: "Product tracking identity not found." });
        }

        res.status(200).json({ success: true, data: product });
    } catch (error) {
        next(error);
    }
};

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        let updateData = { ...req.body };

        // Handle structural file replacement if passed
        if (req.file) {
            const oldRecord = await Product.findById(id);
            if (oldRecord && oldRecord.cloudinaryId) {
                // Erase historical asset track from cloud buckets first
                await cloudinary.uploader.destroy(oldRecord.cloudinaryId);
            }
            updateData.img = req.file.path;
            updateData.cloudinaryId = req.file.filename;
        }

        const modernRecord = await Product.findByIdAndUpdate(id, updateData, { 
            new: true, 
            runValidators: true 
        });

        if (!modernRecord) {
            return res.status(404).json({ success: false, message: "Product tracking identity not found." });
        }

        res.status(200).json({ success: true, data: modernRecord });
    } catch (error) { 
        next(error); 
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const target = await Product.findById(req.params.id);
        if (!target) {
            return res.status(404).json({ success: false, message: "Target product trace not found in system storage." });
        }

        if (target.cloudinaryId) {
            await cloudinary.uploader.destroy(target.cloudinaryId);
        }

        await target.deleteOne();
        res.status(200).json({ success: true, message: "Item cleared across cloud infrastructure pipelines successfully." });
    } catch (error) { 
        next(error); 
    }
};


const adminController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
};

export default adminController;