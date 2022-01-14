const Router = require('express').Router();
const controller = require('../controllers/SaleController');

Router.post('/:user_id', controller.CreateSale);
Router.get('/:sale_id', controller.GetSaleWithBooks);
// Router.put('/:sale_id', controller.UpdateSale);

module.exports = Router;
