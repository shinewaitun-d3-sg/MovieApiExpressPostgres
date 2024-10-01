const { Router } = require("express");
const { createComment } = require("../controllers/comment.controller");

const router = Router();

router.post("/create", createComment);

module.exports = router;
