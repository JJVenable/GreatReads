'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'books',
          'pageCount',
          {
            type: Sequelize.INTEGER
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          'books',
          'description',
          {
            type: Sequelize.TEXT
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'publisher',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'publishedDate',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'apiId',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'categories',
          {
            type: Sequelize.ARRAY(Sequelize.STRING)
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'averageRating',
          {
            type: Sequelize.INTEGER
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'ratingsCount',
          {
            type: Sequelize.INTEGER
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'infoLink',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'textSnippet',
          {
            type: Sequelize.TEXT
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'maturityRating',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'books',
          'publicDomain',
          {
            type: Sequelize.BOOLEAN
          },
          { transaction: t }
        )
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('books', 'pageCount', { transaction: t }),
        queryInterface.changeColumn(
          'books',
          'description',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.removeColumn('books', 'publisher', { transaction: t }),
        queryInterface.removeColumn('books', 'publishedDate', {
          transaction: t
        }),
        queryInterface.removeColumn('books', 'apiId', { transaction: t }),
        queryInterface.removeColumn('books', 'categories', { transaction: t }),
        queryInterface.removeColumn('books', 'averageRating', {
          transaction: t
        }),
        queryInterface.removeColumn('books', 'ratingsCount', {
          transaction: t
        }),
        queryInterface.removeColumn('books', 'infoLink', { transaction: t }),
        queryInterface.removeColumn('books', 'textSnippet', { transaction: t }),
        queryInterface.removeColumn('books', 'maturityRating', {
          transaction: t
        }),
        queryInterface.removeColumn('books', 'publicDomain', { transaction: t })
      ]);
    });
  }
};
