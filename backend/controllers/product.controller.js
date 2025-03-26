import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({
        });
        res.status(200).json({ success: true, data: products});
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error "});

    }
};

export const createProduct = async (req,res) => {
    const product = req.body; // user will send this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "please provide all fields"});
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch(error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    
    console.log("PUT 요청 받음: ID =", id);
    console.log("요청 본문:", product);
    console.log("ID 유효성:", mongoose.Types.ObjectId.isValid(id));

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id"});
    }

    try {
        console.log("데이터베이스 업데이트 시도 중...");
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        console.log("업데이트 결과:", updatedProduct);
        
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: "Product not found"});
        }
        
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("업데이트 오류:", error);
        res.status(500).json({ success: false, message: "Server Error"});
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id"});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted"});
    } catch(error) {
        console.log("error in deleting product:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
    console.log("id:", id);
}; 
