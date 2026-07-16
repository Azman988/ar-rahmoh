import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Product title is mandatory'], 
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    price: { 
        type: Number, 
        required: [true, 'Price designation is mandatory'], 
        min: [0, 'Price cannot be negative'] 
    },
    composition: { type: String, default: "", trim: true },
    benefits: { type: String, default: "", trim: true },
    usage: { type: String, default: "", trim: true },
    inStock: { type: Boolean, default: true },
    img: { 
        type: String, 
        required: [true, 'Cloudinary asset path is mandatory'] 
    }, 
    cloudinaryId: { 
        type: String, 
        required: [true, 'Cloudinary identification tracker is mandatory'] 
    }
}, { 
    timestamps: true,
    versionKey: false 
});

// Production Database Optimization: Index names to optimize catalog lookup queries
ProductSchema.index({ name: 'text', composition: 'text' });

export default mongoose.model('Product', ProductSchema);
