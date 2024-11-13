const Student = require('../models/Student');
const User = require('../models/User');
const generateRandomString = require('../common/randomStringGen');

const saveStudent = async(req,res) =>{
    try{
        let user_name='check';
        const pass = generateRandomString(10);
        const user = new User({
            username:user_name,
            password:pass,
            type:'student'
        });
        const saveUser = await user.save();
        const userid = saveUser._id;
        const student = new Student({
            name:req.body.name,
            parent_name:req.body.parentName,
            dob:req.body.dob,
            phone:req.body.phone,
            email:req.body.email,
            school_name:req.body.schoolName,
            state:req.body.state,
            city:req.body.city,
            pincode:req.body.pincode,
            address:req.body.address,
            studentClass:req.body.class,
            gender:req.body.gender,
            subject:req.body.subjects,
            user_id:userid
        });
        const newStudent = await student.save();
        res.status(200).json({"message":"Student Saved"});
    }catch(error){
        res.status(500).json({"message":error.message})
    }
};

module.exports = {saveStudent};