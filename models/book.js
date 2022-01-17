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
        as: 'sales',
        foreignKey: 'bookId'
      });
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      author: DataTypes.STRING,
      price: DataTypes.FLOAT,
      inventory: DataTypes.INTEGER,
      image: DataTypes.STRING,
      pageCount: DataTypes.INTEGER,
      publisher: DataTypes.STRING,
      publishedDate: DataTypes.STRING,
      apiId: DataTypes.STRING,
      categories: DataTypes.ARRAY(DataTypes.STRING),
      averageRating: DataTypes.INTEGER,
      ratingsCount: DataTypes.INTEGER,
      infoLink: DataTypes.STRING,
      textSnippet: DataTypes.TEXT,
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
