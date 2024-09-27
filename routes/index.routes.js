const { Router } = require("express");
const { auth } = require("../middleware/middleware");
const AuthRoutes = require("../routes/auth.routes");
const UserRoutes = require("./user.routes");

const router = Router();

router.use("/auth", auth, AuthRoutes);
router.use("/user", UserRoutes);

module.exports = router;
