const { Router } = require("express");
const UserRoutes = require("./user.routes");

const router = Router();

router.use("/user", UserRoutes);

module.exports = router;
