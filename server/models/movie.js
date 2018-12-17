console.log("inside of models/movie.js");

const mongoose = require("mongoose");
const ReviewSchema = require("./review.js")

const MovieSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Movie must have a title"], 
        maxlength: 255,
        minlength: [3, "Movie must be at least 3 characters long"]

    },
    reviews: [ReviewSchema],
    avgreview: {
        type: Number,
    },
    initial: {
        name: {
            type: String, 
            required: [true, "Name is required"], 
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
            minlength: [10, "Reviews must be at least 10 characters"]
        }
    }
}, {timestamps: true});

mongoose.model('Movie', MovieSchema);