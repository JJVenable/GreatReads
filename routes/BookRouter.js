const Router = require('express').Router();
const controller = require('../controllers/BookController');

Router.get('/all', controller.GetAllBooks);
Router.delete('/delete/:book_id', controller.DeleteBookByID);
Router.post('/post', controller.CreateBook);

module.exports = Router;
