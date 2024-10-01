const { Router } = require("express");
const { auth } = require("../middleware/middleware");
const AuthRoutes = require("../routes/auth.routes");
const UserRoutes = require("./user.routes");
const MovieRoutes = require("./movie.routes");
const CommentRoutes = require("./comment.routes");

const router = Router();

router.use("/auth", auth, AuthRoutes);
router.use("/user", UserRoutes);
router.use("/movie", MovieRoutes);
router.use("/comment", CommentRoutes);

module.exports = router;
