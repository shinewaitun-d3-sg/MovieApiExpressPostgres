"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.Author, {
        foreignKey: "authorId",
        onDelete: "CASCADE",
      });
      Movie.belongsToMany(models.Genre, {
        through: "MovieGenres",
        foreignKey: "movieId",
        as: "genres",
        onDelete: "CASCADE",
      });
      Movie.belongsToMany(models.Tag, {
        through: "MovieTags",
        foreignKey: "movieId",
        as: "tags",
        onDelete: "CASCADE",
      });
      Movie.hasMany(models.Comment, {
        foreignKey: "commentableId",
        constraints: false,
        scope: {
          commentableType: "movie",
        },
        onDelete: "CASCADE",
      });
    }
  }

  Movie.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imdbRatings: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Movie",
      tableName: "movies",
      timestamps: true,
    }
  );
  return Movie;
};
