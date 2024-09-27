"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.authors.hasMany(models.movies, {
        foreignKey: "authorId",
        onDelete: "CASCADE",
      });
    }
  }
  authors.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "authors",
      timestamps: true,
    }
  );
  return authors;
};
