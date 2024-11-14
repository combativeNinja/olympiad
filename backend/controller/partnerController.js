const Partner = require('../models/Partner');
const User = require('../models/User');
const generateRandomString = require('../common/randomStringGen');

const registerPartner = async (req, res) => {
    try {
        let user_name = 'check1'; 
        const pass = generateRandomString(10);
        
        // Create a new User instance
        const user = new User({
            username: user_name,
            password: pass,
            type: 'partner'
        });
    
        const saveUser = await user.save();
        const userid = saveUser._id;
        
        const partner = new Partner({
            partnerName: req.body.partnerName,
            state: req.body.state,
            city: req.body.city,
            pincode: req.body.pincode,
            contactName: req.body.contactName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            user_id: userid
        });
        
        // Save the Partner instance
        const newPartner = await partner.save();
        
        res.status(200).json({ message: 'Partner registered successfully' });
    } catch (error) {
        // Enhanced error handling
        if (error.code === 11000) {
            res.status(400).json({ message: 'Duplicate key error: Email or username already exists', error });
        } else {
            res.status(500).json({ message: 'Error registering partner', error });
        }
    }
};

module.exports = { registerPartner };