'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Rewards', [
      {
        fundId: 1,
        amount: 5,
        title: 'Thank you!',
        description: 'Contribute without reward',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 1,
        amount: 10,
        title: 'Thank you!',
        description: 'Contribute without reward',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 1,
        amount: 30,
        title: 'Thank you!',
        description: 'Contribute without reward',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 1,
        amount: 50,
        title: 'Thank you!',
        description: 'Contribute without reward',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 1,
        amount: 100,
        title: 'Thank you!',
        description: 'Contribute without reward',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rewards', null, {});
  }
};
