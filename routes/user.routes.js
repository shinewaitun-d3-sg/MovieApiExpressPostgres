const { Router } = require("express");
const { signIn, signUp } = require("../controllers/user.controller");
const { signUpSchema, signInSchema } = require("../validators/user.validator");
const schemaValidator = require("../middleware/schema.validator");

const router = Router();

router.post("/signup", schemaValidator(signUpSchema), signUp);
router.post("/signin", schemaValidator(signInSchema), signIn);

module.exports = router;
