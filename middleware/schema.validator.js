const { ZodError } = require("zod");

const supportedMethods = ["post", "put", "delete", "patch"];

const schemaValidator = (schema, returnZodError = true) => {
  return (req, res, next) => {
    const method = req.method.toLowerCase();

    if (!supportedMethods.includes(method)) {
      return next();
    }

    if (!schema) {
      return res.status(500).json({
        status: "fail",
        message: "Validation schema is not defined.",
      });
    }

    if (!req.body.data) {
      return res.status(400).json({
        status: "fail",
        message: "Wrong request body",
        data: null,
      });
    }

    try {
      const value = schema.parse(req.body.data);
      req.body = value;
      return next();
    } catch (error) {
      console.error("Validation error: ", error);

      const customError = {
        status: "failed",
        error: "Invalid request. Please review request and try again.",
      };

      if (error instanceof ZodError && returnZodError) {
        const zodFormattedError = {
          status: "failed",
          error: {
            original: error,
            details: error.errors.map((err) => ({
              message: err.message,
              path: err.path.join("."),
            })),
          },
        };
        return res.status(422).json(zodFormattedError);
      }

      return res.status(422).json(customError);
    }
  };
};

module.exports = schemaValidator;
