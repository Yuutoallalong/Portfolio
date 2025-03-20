import express from "express";
import mongoose from "mongoose";
import path from "path";
import geoip from "geoip-lite"; // For location tracking
import Visitor from "./visitorModel.js"; // Import Visitor model
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 1025;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));


// Middleware to track visitors
app.use(async (req, res, next) => {
    const ip = req.ip === "::1" ? "127.0.0.1" : req.ip; // Handle localhost IP
    const geo = geoip.lookup(ip) || {};
    const location = geo.city ? `${geo.city}, ${geo.country}` : "Unknown";

    await Visitor.create({ ip, location, page: req.path });

    next();
});

// Serve React's build folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// API for Analytics Dashboard Data
app.get("/api/analytics", async (req, res) => {
    const analyticsData = await Visitor.aggregate([
        { $group: { _id: "$page", views: { $sum: 1 } } }
    ]);

    res.json(analyticsData);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
