const MovieService = require("../services/movie.service");
const {
  created,
  error,
  success,
} = require("../controllers/response.controller");

const addMovie = async (req, res) => {
  try {
    const createdMovie = await MovieService.create(req.body);
    created(res, createdMovie);
  } catch (err) {
    error(res, err);
  }
};

const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await MovieService.update(req.body);
    success(res, updatedMovie);
  } catch (err) {
    error(res, err);
  }
};

const getMovies = async (req, res) => {
  try {
    const { page, limit, sortBy, order, criteria } = req.query;
    const movies = await MovieService.get(page, limit, sortBy, order, criteria);
    success(res, movies);
  } catch (err) {
    error(res, err);
  }
};

const getMovieByPk = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await MovieService.getByPk(parseInt(id));
    success(res, movie);
  } catch (err) {
    error(res, err);
  }
};

const getTopRelatedMovie = async (req, res) => {
  try {
    const { movieId } = req.params;
    const relatedMovies = await MovieService.getRelatedMovie(parseInt(movieId));
    success(res, relatedMovies);
  } catch (err) {
    error(res, err);
  }
};

const removeMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await MovieService.remove(id);
    success(res, movie);
  } catch (err) {
    error(res, err);
  }
};

module.exports = {
  addMovie,
  updateMovie,
  getMovies,
  getMovieByPk,
  removeMovie,
  getTopRelatedMovie,
};
