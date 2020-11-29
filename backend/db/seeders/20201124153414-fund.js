'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Funds', [
      { title: 'Community Fridges',
        subtitle: 'Support accessible food for the community',
        description: 'I have set up 5 fridges around the city of Chicago in densely populated areas for any community members to take as needed-no questions asked. I plan to check on the fridges weekly for maintenance, cleaning, and keeping them stocked. All funds will go towards purchasing food for the fridges, and upkeep. I\'ve teamed up with local cafes and bakeries to provide exchanges for substantial donations. Feel free to stop by any of the community fridges to donate household essentials/canned foods, or to take some home with you.',
        goal: 500,
        funded: 300,
        Image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80',
        categoryId: 2,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Help Artist Pay for Rent',
        subtitle: 'Unable to pay bills due to unemployment',
        description: 'My income stopped mid-March. I have been paying for bills using my savings, and I now need help, while I continue to look for a job. My work has been displayed in galleries across the city, and Canada. I\'m offering commissions or prints of original work.',
        goal: 3000,
        funded: 1600,
        image: 'https://images.unsplash.com/photo-1523554888454-84137e72c3ce?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60',
        categoryId: 1,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Help family of 3 during unemployment',
        subtitle: 'Baker helps neighbors raise funds',
        description: 'I\'m organizing this fund for my neighbors who recently lost their jobs. We have lived next to each other for 8 years, and have grown close. They are not the type to know when to ask for help, so I\'m raising money on their behalf. I enjoy cooking at home for family and friends, and would love to offer some baked goods to those in within 10miles, or recipes.',
        goal: 2000,
        funded: 1200,
        image: 'https://images.unsplash.com/photo-1553367075-c4ab6e63a37f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        categoryId: 4,
        ownerId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Recovery from Surgery',
        subtitle: 'Help me pay for bills while I am unable to work',
        description: 'I recently had surgery done on my leg, and am taking time off from work to recover. My recovery time is estimated to be 3 months, before I can comfortably walk and run again. Money raised will help me pay for bills and necessities (cost of surgery, physical therapy, rent, utilites, and food.)',
        goal: 4000,
        funded: 1000,
        image: 'https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80',
        categoryId: 3,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title:'Help Pay for Therapy',
        subtitle: 'I lost my insurance, and want to continue to pay my therapist.',
        description: 'I lost my health insurance with no warning. I need help paying for therapy and my prescribed medicine while I find new coverage.',
        goal: 500,
        funded: 15,
        Image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        categoryId: 3,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Electricity Bill',
        subtitle: 'I have too many lamps in my home and I need less',
        description: 'Please buy my lamps. I have many kinds: table, ceiling, floor, clamp light, if you need it, I have it. All proceeds will go to my electricity bill.',
        goal: 500,
        funded: 25,
        Image: 'https://images.unsplash.com/photo-1452886692067-11c699fb38e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1055&q=80',
        categoryId: 2,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'At-home Physical Therapy',
        subtitle: 'Knee surgery recovery without health insurance',
        description: 'Because of covid gyms are closed, and I need to be exercising frequently to maintain my knee after surgery several months ago. I can do body weight exercise, but it has not been enough. I have been experiencing pain while walking. I cannot afford actual physical therapy because I no longer have health insurance. I want to purchase some weights and a balance pad. Thank you!',
        goal: 500,
        funded: 170,
        Image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
        categoryId: 3,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Help me move my wood.',
        subtitle: 'My firewood was delivered, and I can’t carry it alone',
        description: 'ALL MONEY REFUNDED. FOR CATEGORICAL PURPOSES ONLY. My firewood was delivered this weekend, and my friend dropped out last minute. Due to back problems, I can not transport all of this wood into my home. I need someone or several people willing to carry loads up to ~40lbs. You can come and move all my wood or only move an armful or two.',
        goal: 1,
        funded: 0,
        Image: 'https://images.unsplash.com/photo-1483217067170-e62094708cd8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80',
        categoryId: 2,
        ownerId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { title: 'Juggling Hobbyist: Unemployed due to COVID',
        subtitle: 'Juggling zoom performances to pay expenses while I job-search.',
        description: 'I was laid off during the pandemic, and need help paying for bills. I am an amateur juggler, and can perform for an audience. I can do various tricks and, with a kind audience, I can attempt some trickier, new ones. Various donations will get different types of performances from basic and short to a spectacular one hour show. Highest donors will get juggling lessons if they desire.',
        goal: 1600,
        funded: 25 ,
        Image: 'https://images.unsplash.com/photo-1583299566850-f00a57e46163?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80',
        categoryId:  4,
        ownerId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
        },



    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Funds', null, {});
  }
};
