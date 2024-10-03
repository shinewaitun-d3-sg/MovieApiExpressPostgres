const { Router } = require("express");
const {
  getMovies,
  getMovieByPk,
  getTopRelatedMovie,
} = require("../controllers/movie.controller");
const router = Router();

router.get("/get", getMovies);
router.get("/get/:id", getMovieByPk);
router.get("/getRelated/:movieId", getTopRelatedMovie);

module.exports = router;
