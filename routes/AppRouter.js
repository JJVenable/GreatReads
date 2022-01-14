const Router = require('express').Router();
// const UserRouter = require('./UserRouter');
const BookRouter = require('./BookRouter');
const SaleRouter = require('./SaleRouter');
// Router.use('/users', UserRouter);
Router.use('/books', BookRouter);
Router.use('/sales', SaleRouter);
module.exports = Router;
