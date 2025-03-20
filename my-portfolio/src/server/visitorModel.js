import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema({
    ip: String,
    location: String,
    page: String,
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Visitor", visitorSchema);
