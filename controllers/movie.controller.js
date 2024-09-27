const MovieService = require("../services/movie.service");

const addMovie = async (req, res) => {
  try {
    const createdMovie = await MovieService.create(req.body);
    return createdMovie;
  } catch (error) {
    return error;
  }
};

module.exports = {
  addMovie,
};
