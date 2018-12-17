console.log("inside of controllers/movies.js");

const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');
const Review = mongoose.model('Review');

class Movies {
    getAll(req, res){
        Movie.find({}).sort({"avgreview" : -1}).exec( function(err, movies){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "movies": movies})
            }
        });
    }
    getId(req, res){
        Movie.findOne({_id: req.params.id}, function(err, movie){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok", "movie": movie});
            }
        });
    }
    create(req, res){
        let movie = new Movie(req.body);
        movie.avgreview = movie.initial.rating;
        movie.reviews.push(movie.initial);
        movie.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok"});
            }
        });
    }
    update(req, res){
        Movie.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else {
                res.json({"status": "ok"});
            }
        })
    }
    delete(req, res){
        Movie.remove({_id: req.params.id}, function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok"});
            }
        })
    }
}

module.exports = new Movies();