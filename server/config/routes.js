console.log ("inside of config/routes.js");

const Movies = require("../controllers/movies");
const Reviews = require("../controllers/reviews");

module.exports = function(app){
    app.get("/movie", Movies.getAll);
    app.get("/movie/:id", Movies.getId);
    app.post("/movie", Movies.create);
    app.post('/movie/:id/review', Reviews.addReview);
    app.put('/movie/:id', Movies.update);
    app.delete('/movie/:id', Movies.delete);
}