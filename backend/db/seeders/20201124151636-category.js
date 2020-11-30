'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
    {
      name: 'Housing',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Food & Living',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Medical',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Unemployment Relief',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
