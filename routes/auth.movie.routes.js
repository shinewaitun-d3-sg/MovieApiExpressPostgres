const { Router } = require("express");
const {
  addMovie,
  updateMovie,
  removeMovie,
} = require("../controllers/movie.controller");

const router = Router();

router.post("/create", addMovie);
router.patch("/update", updateMovie);
router.delete("/remove/:id", removeMovie);

module.exports = router;
