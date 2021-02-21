'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Form_Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nilai: {
        type: Sequelize.ENUM('bintang 1','bintang 2','bintang 3','bintang 4','bintang 5')
      },
      nama: {
        type: Sequelize.STRING
      },
      review: {
        type: Sequelize.TEXT
      },
      gambar: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Form_Reviews');
  }
};