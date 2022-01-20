const { User, Book, Sale, CheckoutList } = require('../models');
const { Op, literal, fn, col } = require('sequelize');

const CreateSale = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let saleBody = {
      userId
    };
    let sale = await Sale.create(saleBody);
    res.send(sale);
  } catch (error) {
    throw error;
  }
};

const GetSaleWithBooks = async (req, res) => {
  try {
    let saleId = parseInt(req.params.sale_id);
    const sale = await Sale.findByPk(saleId, {
      include: [
        {
          model: Book,
          as: 'items',
          through: { attributes: [] }
        }
      ]
    });
    res.send(sale);
  } catch (error) {
    throw error;
  }
};

const GetSales = async (req, res) => {
  try {
    const result = await Sale.findAll({
      include: [
        {
          model: Book,
          as: 'items',
          through: { attributes: [] }
        }
      ]
    });
    res.send(result);
  } catch (error) {
    throw error;
  }
};

const DeleteSale = async (req, res) => {
  try {
    let saleId = parseInt(req.params.sale_id);
    await Sale.destroy({ where: { id: saleId } });
    res.send({ message: `Deleted sale with an id of ${saleId}` });
  } catch (error) {
    throw error;
  }
};

const GetSalesByUserId = async (req, res) => {
  try {
    const curUserId = parseInt(req.params.user_id);
    const result = await Sale.findAll({
      where: { userId: curUserId },
      include: [
        {
          model: Book,
          as: 'items',
          through: { attributes: [] }
        }
      ]
    });
    res.send(result);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateSale,
  GetSaleWithBooks,
  GetSales,
  DeleteSale,
  GetSalesByUserId
};
