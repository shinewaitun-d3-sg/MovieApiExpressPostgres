const { Router } = require("express");
const {
  addMovie,
  updateMovie,
  removeMovie,
} = require("../controllers/movie.controller");
const schemaValidator = require("../middleware/schema.validator");
const {
  movieCreateSchema,
  movieUpdateSchema,
} = require("../validators/movie.validator");

const router = Router();

router.post("/create", schemaValidator(movieCreateSchema), addMovie);
router.patch("/update", schemaValidator(movieUpdateSchema), updateMovie);
router.delete("/remove/:id", removeMovie);

module.exports = router;
