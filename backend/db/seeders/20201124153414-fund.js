'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Funds', [
      { title: 'Recovery from Surgery',
        subtitle: 'Help me pay for bills while I am unable to work',
        description: 'words words words words words words words words words words',
        goal: 2000,
        image: 'https://www.chestercountyhospital.org/-/media/images/chestercounty/news%20images/2019/image%20of%20cast%20small.ashx?h=399&w=600&la=en',
        categoryId: 3,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Community Fridge',
        subtitle: 'Support accessible food for the community',
        description: 'words words words words words words words words words words',
        goal: 1000,
        image: 'https://www.chestercountyhospital.org/-/media/images/chestercounty/news%20images/2019/image%20of%20cast%20small.ashx?h=399&w=600&la=en',
        categoryId: 2,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Help Pay for Rent',
        subtitle: 'Unable to pay bills due to unemployment',
        description: 'words words words words words words words words words words',
        goal: 3000,
        image: 'https://www.chestercountyhospital.org/-/media/images/chestercounty/news%20images/2019/image%20of%20cast%20small.ashx?h=399&w=600&la=en',
        categoryId: 1,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Help family of 3 during unemployment',
        subtitle: 'I recently lost my income. Any help is appreciated.',
        description: 'words words words words words words words words words words',
        goal: 3000,
        image: 'https://www.chestercountyhospital.org/-/media/images/chestercounty/news%20images/2019/image%20of%20cast%20small.ashx?h=399&w=600&la=en',
        categoryId: 4,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Funds', null, {});
  }
};
