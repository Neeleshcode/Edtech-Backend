const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    gender: {
        type:String,
    },
    dateOfBirth: {
        type: String,
    },
    about: {
        type: String,
        trim: true,
    },
    ContactNumber: {
        type: Number,
        trim: true,
    }       
    

});

const Profile = mongoose.model('Profile', userSchema);

module.exports = Profile;
