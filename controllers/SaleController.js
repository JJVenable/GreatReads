const { User, Book, Sale, CheckoutList } = require('../models');
const { Op, literal, fn, col } = require('sequelize');

const CreateSale = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let saleBody = {
      userId
      // ...req.body
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
    console.log(error);
  }
};

// const UpdateSale = async (req, res) => {
//   try {
//     let body = {
//       ...req.body
//     };
//     let join = await CheckoutList.create(body);
//     res.send(join);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const UpdateSale = async (req, res) => {
//   try {
//     return Sale.findByPk(2).then((sale) => {
//       if (!sale) {
//         console.log('Sale not found!');
//         return null;
//       }
//       return Book.findByPk(6).then((book) => {
//         if (!book) {
//           console.log('Book not found!');
//           return null;
//         }
//         console.log('on line 48');
//         sale.addBook(book);
//         console.log(`added the book to to the sale`);
//         return sale;
//       });
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const UpdateSale = async (req, res) => {
//   try {
//     let saleId = parseInt(req.params.sale_id);

//     let sale = await Sale.findByPk(saleId);
//     let book = await Book.findByPk(6);

// BREAKS AFTER THIS
//     sale.addBook(book);
//     let updatedSale = await Sale.findByPk(saleId, {
//       include: [
//         {
//           model: Book,
//           as: 'items',
//           through: { attributes: [] }
//         }
//       ]
//     });
//     res.send(updatedSale);
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  CreateSale,
  GetSaleWithBooks
  // UpdateSale
};
