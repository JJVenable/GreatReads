'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Book.belongsToMany(models.Sale, {
        through: models.CheckoutList,
        as: 'books',
        foreignKey: 'bookId'
      });
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      author: DataTypes.STRING,
      price: DataTypes.INTEGER,
      inventory: DataTypes.INTEGER,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Book',
      tableName: 'books'
    }
  );
  return Book;
};
