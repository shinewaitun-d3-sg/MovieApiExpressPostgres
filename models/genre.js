"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.genre.belongsToMany(models.movie, {
        through: "MovieGenre",
        foreignKey: "genreId",
      });
    }
  }
  genre.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "genre",
      timestamps: true,
    }
  );
  return genre;
};
