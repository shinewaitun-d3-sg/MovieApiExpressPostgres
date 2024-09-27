const { Router } = require("express");
const authMovieRoutes = require("../routes/auth.movie.routes");

const router = Router();

router.use("/movie", authMovieRoutes);

module.exports = router;
