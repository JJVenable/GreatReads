'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    

    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'John',
          lastName: 'Doe',
          password: '12345678',
          username:'jdoe',
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],{}
    )
  },
  
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
