const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    parent_name:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    phone:{
        type:String,
        required:true,
        match: /^[0-9]{10}$/
    },
    email:{
        type:String,
        required:true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    school_name:{
        type:String,
        required:true
    },
    state:{
        type:Number,
        required:true
    },
    city:{
        type:Number,
        required:true
    },
    pincode:{
        type:String,
        required:true,
        match: /^[0-9]{6}$/
    },
    address:{
        type:String,
        required:true
    },
    studentClass:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum: ['Male', 'Female', 'Other']
    },
    subject:{
        type:[String],
        required:true
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId, // Changed to ObjectId for relationship
        ref: 'User', // Reference to the User model
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema);