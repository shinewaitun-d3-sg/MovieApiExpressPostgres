"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MovieTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MovieTags.init(
    {
      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "MovieTags",
      tableName: "MovieTags",
      timestamps: false,
    }
  );
  return MovieTags;
};
