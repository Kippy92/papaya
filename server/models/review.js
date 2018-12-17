
console.log("inside of models/review.js");

const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Name is required"],
        minlength: [3, "Name must be 3+ characters"], 
        maxlength: [255, "Name is too long"]
    },
    rating: {
        type: Number, 
        required: [true, "Rating is required"], 
        max: 5, 
        min: 1
    },
    comment: {
        type: String, 
        required: [true, "Review is required"], 
        minlength: [3, "Reviews must be at least 3 characters"]
    }
}, {timestamps: true});

mongoose.model('Review', ReviewSchema); 

module.exports = ReviewSchema;