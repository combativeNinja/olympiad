const School = require('../models/School');
const User = require('../models/User');
const generateRandomString = require('../common/randomStringGen');

const registerSchool = async (req, res) => {
    try {
        let user_name = 'check2'; 
        const pass = generateRandomString(10);
        
        const user = new User({
            username: user_name,
            password: pass,
            type: 'school'
        });
    
        const saveUser = await user.save();
        const userid = saveUser._id;
        
        const school = new School({
            schoolName: req.body.schoolName,
            state: req.body.state,
            city: req.body.city,
            pincode: req.body.pincode,
            contactName: req.body.contactName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            user_id: userid
        });

        const newSchool = await school.save();
        
        res.status(200).json({ message: 'School registered successfully' });
    } catch (error) {

        if (error.code === 11000) {
            res.status(400).json({ message: 'Duplicate key error: Email or username already exists', error });
        } else {
            res.status(500).json({ message: 'Error registering school', error });
        }
    }
};

module.exports = { registerSchool };