'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsToMany(models.Sale, {
        through: models.CheckoutList,
        as: 'sales',
        foreignKey: 'bookId'
      });
      Book.hasMany(models.Review, { foreignKey: 'bookId' });
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING(100000),
      author: DataTypes.STRING,
      price: DataTypes.FLOAT,
      inventory: DataTypes.INTEGER,
      image: DataTypes.STRING,
      pageCount: DataTypes.INTEGER,
      publisher: DataTypes.STRING,
      publishedDate: DataTypes.STRING,
      apiId: DataTypes.STRING,
      categories: DataTypes.ARRAY(DataTypes.STRING),
      averageRating: DataTypes.FLOAT,
      ratingsCount: DataTypes.INTEGER,
      infoLink: DataTypes.STRING,
      textSnippet: DataTypes.STRING(100000),
      maturityRating: DataTypes.STRING,
      publicDomain: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'Book',
      tableName: 'books'
    }
  );
  return Book;
};
