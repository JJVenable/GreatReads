const Router = require('express').Router();
const controller = require('../controllers/ReviewController');

Router.post('/:user_id/:book_id', controller.CreateReview);
// Router.get('/:book_id', controller.GetReviewByBookID);

module.exports = Router;
