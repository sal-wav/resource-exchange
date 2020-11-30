'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Exchanges', [
      {
        fundId: 1,
        amount: 15,
        title: 'Free coffee',
        description: 'Receive coupon for a free coffee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 1,
        amount: 30,
        title: 'Free Pastry',
        description: 'Receive a free pastry, and free coffee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 1,
        amount: 50,
        title: 'Gift Card',
        description: 'Receive a gift card, free pastry, and free coffee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 1,
        amount: 100,
        title: 'Name a menu item after you',
        description: 'New or existing menu item named after you, gift card, free pastry, and free coffee',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 2,
        amount: 15,
        title: '4x6 print',
        description: '4x6 print of existing work',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 2,
        amount: 30,
        title: '2 prints',
        description: 'Two 4x6 prints of existing work',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 2,
        amount: 40,
        title: 'Commission',
        description: 'Custom digital illustration, black and white, and a 4x6 print of existing work',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 2,
        amount: 60,
        title: 'Commission',
        description: 'Custom digital illustration, colored, and 4x6 print of existing work',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 2,
        amount: 130,
        title: 'Commission',
        description: 'Custom 8x10 print, colored, and two 4x6 print of existing work',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 3,
        amount: 10,
        title: '5 Recipe pdfs',
        description: '5 recipes emailed to you',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 3,
        amount: 20,
        title: '10 Recipe pdfs',
        description: '10 recipes emailed to you',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 3,
        amount: 50,
        title: '42 Recipe pdfs',
        description: '42 recipes emailed to you',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 3,
        amount: 80,
        title: 'Recipe Book',
        description: 'Physical book mailed to you',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 3,
        amount: 160,
        title: '2 Recipe Books',
        description: '2 Physical books mailed to you',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 4,
        amount: 5,
        title: 'Thank you',
        description: 'Help pay bills',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 4,
        amount: 10,
        title: 'Thank you',
        description: 'Help pay bills',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 4,
        amount: 20,
        title: 'Thank you',
        description: 'Help pay bills',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 4,
        amount: 30,
        title: 'Thank you',
        description: 'Help pay bills',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fundId: 4,
        amount: 50,
        title: 'Thank you',
        description: 'Help pay bills',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 5,
        amount: 5,
        title: 'selfie',
        description: 'I send you a selfie of me being less depressed',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 5,
        amount: 15,
        title: 'drawing',
        description: 'small drawing of your choice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 5,
        amount: 25,
        title: 'pair of earrings',
        description: 'earrings of your choice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 5,
        amount: 35,
        title: 'lamp',
        description: 'You can take a lamp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 6,
        amount: 5,
        title: 'Wave',
        description: 'We will wave in the doorway',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 6,
        amount: 10,
        title: 'Hug',
        description: 'We will hug before you part (must be covid safe)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 6,
        amount: 20,
        title: 'Slice of Pie',
        description: 'You can take a slice of my pie.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 6,
        amount: 50,
        title: 'Free Lamp',
        description: 'You get to take another lamp.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 7,
        amount: 5,
        title: 'Thank you!',
        description: 'You’re great. I just want you to know that.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 7,
        amount: 10,
        title: 'I appreciate you.',
        description: 'I will send you a picture of my cat.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 7,
        amount: 20,
        title: 'That\'s amazing.',
        description: 'I will send you a picture of my cat and my sister\'s cat playing.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 8,
        amount: 15,
        title: 'Sing a Song',
        description: 'If you move wood for 15 minutes, I will sing you a song.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 8,
        amount: 30,
        title: 'Mulled Cider',
        description: 'If you move wood for half an hour, I will make you mulled cider.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 8,
        amount: 45,
        title: 'Sandwich',
        description: 'If you move wood for 45 minutes, I will make you mulled cider and a sandwich. We will probably become friends.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 9,
        amount: 20,
        title: 'Intro juggling show',
        description: '10 minute show, some laughs, big wows',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 9,
        amount: 50,
        title: 'Advanced show',
        description: '15 minute show, more impressive tricks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 9,
        amount: 75,
        title: 'Advanced plus show',
        description: '15 minute show, gymnastic tricks',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 10,
        amount: 5,
        title: 'Thank you!',
        description: 'no exchange',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 20,
        amount: 5,
        title: 'Thank you!',
        description: 'no exchange',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { fundId: 35,
        amount: 5,
        title: 'Thank you!',
        description: 'no exchange',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Exchanges', null, {});
  }
};
