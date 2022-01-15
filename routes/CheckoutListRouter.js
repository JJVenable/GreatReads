const Router = require('express').Router();
const controller = require('../controllers/CheckoutListController');

Router.post('/new', controller.CreateCheckoutList);

module.exports = Router;
