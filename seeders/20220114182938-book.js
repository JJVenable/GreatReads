'use strict';
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const books = [...Array(20)].map((_) => ({
      name: faker.lorem.words(3),
      description: faker.lorem.words(15),
      author: faker.name.findName(),
      price:faker.commerce.price(),
      inventory:10,
      image: faker.image.abstract(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('books', books)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('books')
  }
};
