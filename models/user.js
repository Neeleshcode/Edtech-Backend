const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    accountType: {
        type: String,
        required: true,
        enum: ['admin', 'Student', 'Instructor']
    },
    additionalDetails: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        ref: "Profile",
    },
    courses: [
        { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
        }
    ],
    image: {
        type: String,
        required:true,
    },
    courseProgress: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'CourseProgress'
        }
    ]

});

const User = mongoose.model('User', userSchema);

module.exports = User;
