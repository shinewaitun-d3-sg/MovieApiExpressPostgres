const express = require("express");
const cors = require("cors");
const Routes = require("./routes/index.routes");
const { sequelize } = require("./models");
const { checkAccessToken } = require("./middleware/middleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", checkAccessToken, Routes);

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};

connectDb();

module.exports = app;
