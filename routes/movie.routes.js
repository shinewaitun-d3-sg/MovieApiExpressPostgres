const { Router } = require("express");
const { getMovies, getMovieByPk } = require("../controllers/movie.controller");
const router = Router();

router.get("/get", getMovies);
router.get("/get/:id", getMovieByPk);

module.exports = router;
