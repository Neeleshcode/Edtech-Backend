const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({

    courseName: {
        type: String,
    },
    courseDescription: {
        type: String,
    },
    instructor: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,     
    },
    whatYouWillLearn: {
        type: [String],
    },
    courseContent: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Section',
        }
    ],
    price: {
        type: Number,
    },
    thumbnail: {
        type: String,
    },
    tag: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
    },
    studentEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        }
    ]
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course ;
