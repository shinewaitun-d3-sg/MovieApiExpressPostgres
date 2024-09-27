const { DataTypes } = require("sequelize");
const { sequelize } = require("../models");
const Author = require("../models/author")(sequelize, DataTypes);
const Genre = require("../models/genre")(sequelize, DataTypes);
const Tag = require("../models/tag")(sequelize, DataTypes);
const Movie = require("../models/movie")(sequelize, DataTypes);

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
      await createdMovie.setGenre(genres);
    }

    if (data.tagIds && data.tagIds.length > 0) {
      const tags = await Tag.findAll({ where: { id: data.tagIds } });
      if (tags.length !== data.tagIds.length) {
        throw new Error("Tag IDs are invalid.");
      }
      await createdMovie.setTag(tags);
    }

    return createdMovie;
  } catch (error) {
    console.error("Error creating movie:", error.message);
    throw error;
  }
};

module.exports = { create };
