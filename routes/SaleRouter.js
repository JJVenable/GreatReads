const Router = require('express').Router();
const controller = require('../controllers/SaleController');

Router.get('/all', controller.GetSales);
Router.post('/:user_id', controller.CreateSale);
Router.get('/details/:sale_id', controller.GetSaleWithBooks);
Router.delete('/delete/:sale_id', controller.DeleteSale);

module.exports = Router;
