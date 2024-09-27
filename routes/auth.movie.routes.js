const { Router } = require("express");
const { addMovie } = require("../controllers/movie.controller");

const router = Router();

router.post("/create", addMovie);

module.exports = router;
