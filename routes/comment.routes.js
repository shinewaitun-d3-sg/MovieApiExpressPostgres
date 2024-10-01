const { Router } = require("express");
const { getCommentsByMovie } = require("../controllers/comment.controller");

const router = Router();

router.get("/byMovie", getCommentsByMovie);

module.exports = router;
