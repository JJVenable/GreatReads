'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CheckoutList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CheckoutList.init(
    {
      saleId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      bookId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'books',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'CheckoutList',
      tableName: 'checkout_lists'
    }
  );
  return CheckoutList;
};
