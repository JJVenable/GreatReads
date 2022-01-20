const { User, Book, Sale, CheckoutList } = require('../models');
const { Op, literal, fn, col } = require('sequelize');

const CreateCheckoutList = async (req, res) => {
  try {
    let body = {
      ...req.body
    };
    await CheckoutList.create(body);
    res.send(body);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  CreateCheckoutList
};
