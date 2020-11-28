'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Funds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(100),
        unique: true
      },
      subtitle: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      goal: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      funded: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Categories' }
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
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
    await queryInterface.dropTable('Funds');
  }
};
