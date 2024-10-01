const { Router } = require("express");
const authMovieRoutes = require("../routes/auth.movie.routes");
const authCommentRoutes = require("./auth.comment.routes");

const router = Router();

router.use("/movie", authMovieRoutes);
router.use("/comment", authCommentRoutes);

module.exports = router;
