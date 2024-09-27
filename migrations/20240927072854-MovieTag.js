"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("MovieTag", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      movieId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("MovieTag");
  },
};
