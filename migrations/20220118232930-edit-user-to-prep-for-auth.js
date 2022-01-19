'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.renameColumn('users', 'firstName', 'name', {
          transaction: t
        }),
        queryInterface.removeColumn('users', 'lastName', { transaction: t }),
        queryInterface.removeColumn('users', 'password', { transaction: t }),
        queryInterface.removeColumn('users', 'isAdmin', { transaction: t }),
        queryInterface.removeColumn('users', 'username', { transaction: t })
      ]);
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.renameColumn('users', 'name', 'firstName', {
          transaction: t
        }),
        queryInterface.addColumn(
          'users',
          'lastName',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'users',
          'password',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'users',
          'isAdmin',
          {
            type: Sequelize.BOOLEAN
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'users',
          'username',
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        )
      ]);
    });
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
