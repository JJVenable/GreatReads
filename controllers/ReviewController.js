const { User, Book, Sale, CheckoutList, Review } = require('../models');
const { Op, literal, fn, col } = require('sequelize');

const CreateReview = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let bookId = parseInt(req.params.book_id);
    let reviewBody = {
      userId,
      bookId,
      ...req.body
    };
    let review = await Review.create(reviewBody);
    res.send(review);
  } catch (error) {
    throw error;
  }
};

const GetAllReviews = async (req, res) => {
  try {
    let reviews = await Review.findAll({});
    res.send(reviews);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateReview,
  GetAllReviews
};
