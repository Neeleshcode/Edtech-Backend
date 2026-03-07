const mongoose = require('mongoose');

const RatingAndReviewSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',    
    },
    rating:{
        type:Number,    
        ref:'User',
    },
    review:{
        type:String,    
        required:true,
    }
});

const RatingAndReview = mongoose.model('RatingAndReview', RatingAndReviewSchema );

module.exports = RatingAndReview ;
