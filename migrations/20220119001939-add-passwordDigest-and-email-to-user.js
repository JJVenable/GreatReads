'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn(
          'users',
          'email',
          {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          'users',
          'passwordDigest',
          {
            type: Sequelize.STRING,
            allowNull: false
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          'users',
          'name',
          {
            type: Sequelize.STRING,
            allowNull: false
          },
          { transaction: t }
        )
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
        queryInterface.removeColumn('users', 'name', { transaction: t }),
        queryInterface.removeColumn('users', 'passwordDigest', {
          transaction: t
        }),
        queryInterface.changeColumn(
          'users',
          'name',
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
