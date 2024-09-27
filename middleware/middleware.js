const jwt = require("jsonwebtoken");

const checkAccessToken = (req, res, next) => {
  try {
    const accessToken = "access_token";
    if (req.headers.accesstoken !== accessToken) {
      res.json({ error: "Failed to validate access token!" });
      return;
    } else {
      next();
    }
  } catch (error) {
    throw new Error("Failed to validate access token!");
  }
};

const auth = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, "secret_key", (err) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  });
};

module.exports = {
  auth,
  checkAccessToken,
};
