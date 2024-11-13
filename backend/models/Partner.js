const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    partnerName: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
    contactName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    user_id:{
        type: mongoose.Schema.Types.ObjectId, // Changed to ObjectId for relationship
        ref: 'User', // Reference to the User model
        required: true
    }
});

module.exports = mongoose.model('Partner', partnerSchema);