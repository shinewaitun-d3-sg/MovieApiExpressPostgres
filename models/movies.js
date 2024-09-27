"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.movies.belongsTo(models.authors, {
        foreignKey: "authorId",
        onDelete: "CASCADE",
      });
      models.movies.belongsToMany(models.genres, {
        through: "MovieGenre",
        foreignKey: "movieId",
      });
      models.movies.belongsToMany(models.tags, {
        through: "MovieTag",
        foreignKey: "movieId",
      });
      models.movies.hasMany(models.comments, {
        foreignKey: "movieId",
        onDelete: "CASCADE",
      });
    }
  }
  movies.init(
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
      modelName: "movies",
      timestamps: true,
    }
  );
  return movies;
};
