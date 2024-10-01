"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MovieGenres", {
      movieId: {
        type: DataTypes.INTEGER,
        references: {
          model: "movies",
          key: "id",
        },
      },
      genreId: {
        type: DataTypes.INTEGER,
        references: {
          model: "genres",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("MovieGenres");
  },
};
