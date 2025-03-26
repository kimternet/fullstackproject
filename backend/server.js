//const express = require("express");

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

// app.get("/products", (req, res) => {});

// app.get("/", (req, res) => {
//     res.send("Server is ready1");
// });

app.use(express.json());

app.use("/api/products",productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000");
});



// gWUShSLAjXZ333ng

// mPiKmB18fow9J8rY