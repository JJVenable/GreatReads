const Router = require('express').Router();
const controller = require('../controllers/BookController');

Router.get('/salestats/:book_id', controller.GetBookWithSales);
Router.get('/details/:book_id', controller.GetBookByID);
Router.get('/all', controller.GetAllBooks);
Router.delete('/delete/:book_id', controller.DeleteBookByID);
Router.post('/post', controller.CreateBook);
Router.put('/update/:book_id', controller.UpdateBook);

module.exports = Router;
