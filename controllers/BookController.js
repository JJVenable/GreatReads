const { User, Book, Sale, Review, CheckoutList } = require('../models');
const { Op, literal, fn, col } = require('sequelize');

const GetAllBooks = async (req, res) => {
  try {
    const result = await Book.findAll({});
    res.send(result);
  } catch (error) {
    throw error;
  }
};

const DeleteBookByID = async (req, res) => {
  try {
    let bookId = parseInt(req.params.book_id);
    await Book.destroy({ where: { id: bookId } });
    res.send({ message: `Deleted book with an id of ${bookId}` });
  } catch (error) {
    throw error;
  }
};

const CreateBook = async (req, res) => {
  try {
    let bookBody = {
      ...req.body
    };
    let book = await Book.create(bookBody);
    res.send(book);
  } catch (error) {
    throw error;
  }
};

const UpdateBook = async (req, res) => {
  try {
    let bookId = parseInt(req.params.book_id);
    let updatedBook = await Book.update(req.body, {
      where: { id: bookId },
      returning: true
    });
    res.send(updatedBook);
  } catch (error) {
    throw error;
  }
};

const GetBookByID = async (req, res) => {
  try {
    let bookId = parseInt(req.params.book_id);
    const book = await Book.findByPk(bookId);
    res.send(book);
  } catch (error) {
    throw error;
  }
};

const GetBookWithSales = async (req, res) => {
  try {
    let bookId = parseInt(req.params.book_id);
    const book = await Book.findByPk(bookId, {
      include: [
        {
          model: Sale,
          as: 'sales',
          through: { attributes: [] }
        }
      ]
    });
    res.send(book);
  } catch (error) {
    throw error;
  }
};

const GetBookWithAllReviews = async (req, res) => {
  try {
    let bookId = parseInt(req.params.book_id);
    const reviews = await Book.findByPk(bookId, {
      include: Review
    });
    res.send(reviews);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllBooks,
  DeleteBookByID,
  CreateBook,
  UpdateBook,
  GetBookByID,
  GetBookWithSales,
  GetBookWithAllReviews
};
