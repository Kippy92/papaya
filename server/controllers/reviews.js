console.log("inside of controllers/reviews.js");

const mongoose = require('mongoose');
const Movie = mongoose.model('Movie');
const Review = mongoose.model('Review');

class Reviews {

    addReview(req, res){
        let review = new Review(req.body);
        review.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                Movie.findOne({_id:req.params.id}, function(err, movie){
                    if(err){
                        res.json({"status": "not ok", "errors": err}); 
                    }
                    else {
                        movie.reviews.push(review);
                        let total = 0;
                        for (let r of movie.reviews){
                            total += r.rating;
                        }
                        movie.avgreview = total/movie.reviews.length;
                        movie.save(function(err){
                            if (err){
                                res.json({"status": 'not ok', "errors": err});
                            }
                            else{
                                res.json({"status": 'ok'});
                            }
                        })
                    }
                })
            }
        });
    }
}

module.exports = new Reviews();