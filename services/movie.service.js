const { getPaginatedItems } = require("./base.service");

const Author = require("../models").Author;
const Genre = require("../models").Genre;
const Tag = require("../models").Tag;
const Movie = require("../models").Movie;

const create = async (data) => {
  try {
    const author = await Author.findByPk(data.authorId);
    if (!author) {
      throw new Error(`Author with ID ${data.authorId} not found.`);
    }

    const createdMovie = await Movie.create({
      title: data.title,
      imdbRatings: data.imdbRatings,
      authorId: data.authorId,
    });

    if (data.genreIds && data.genreIds.length > 0) {
      const genres = await Genre.findAll({ where: { id: data.genreIds } });
      if (genres.length !== data.genreIds.length) {
        throw new Error("Genre IDs are invalid.");
      }
      await createdMovie.addGenres(genres);
    }

    if (data.tagIds && data.tagIds.length > 0) {
      const tags = await Tag.findAll({ where: { id: data.tagIds } });
      if (tags.length !== data.tagIds.length) {
        throw new Error("Tag IDs are invalid.");
      }
      await createdMovie.addTags(tags);
    }

    return createdMovie;
  } catch (error) {
    console.error("Error creating movie:", error.message);
    throw error;
  }
};

const update = async (data) => {
  try {
    const movie = await Movie.findByPk(data.id);
    if (!movie) {
      throw new Error(`Movie with ID ${data.id} not found.`);
    }

    await movie.update({
      title: data.title,
      imdbRatings: data.imdbRatings,
      authorId: data.authorId,
    });

    if (data.genreIds && data.genreIds.length > 0) {
      const genres = await Genre.findAll({ where: { id: data.genreIds } });
      if (genres.length !== data.genreIds.length) {
        throw new Error("One or more Genre IDs are invalid.");
      }
      await movie.setGenres(genres);
    }

    if (data.tagIds && data.tagIds.length > 0) {
      const tags = await Tag.findAll({ where: { id: data.tagIds } });
      if (tags.length !== data.tagIds.length) {
        throw new Error("One or more Tag IDs are invalid.");
      }
      await movie.setTags(tags);
    }

    return movie;
  } catch (error) {
    console.error("Error updating movie:", error.message);
    throw error;
  }
};

const get = async (page, limit, sortBy, order, criteria) => {
  try {
    const movies = await getPaginatedItems(
      Movie,
      page,
      limit,
      sortBy,
      order,
      ["genres", "tags"],
      criteria
    );
    return movies;
  } catch (error) {
    return error;
  }
};

const getByPk = async (id) => {
  try {
    const movies = await Movie.findByPk({ where: { id: id } });
    return movies;
  } catch (error) {
    return error;
  }
};

const remove = async (id) => {
  try {
    const pk = parseInt(id);
    const deletedMovie = await Movie.destroy({ where: { id: pk } });
    return deletedMovie;
  } catch (error) {
    return error;
  }
};

module.exports = { create, update, get, getByPk, remove };
