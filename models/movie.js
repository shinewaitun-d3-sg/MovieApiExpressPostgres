"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.movie.belongsTo(models.author, {
        foreignKey: "authorId",
        onDelete: "CASCADE",
      });
      models.movie.belongsToMany(models.genre, {
        through: "MovieGenre",
        foreignKey: "movieId",
      });
      models.movie.belongsToMany(models.tag, {
        through: "MovieTag",
        foreignKey: "movieId",
      });
      models.movie.hasMany(models.comment, {
        foreignKey: "movieId",
        onDelete: "CASCADE",
      });
    }
  }
  movie.init(
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
      modelName: "movie",
      timestamps: true,
    }
  );
  return movie;
};
