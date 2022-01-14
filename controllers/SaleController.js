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
//     let saleId = parseInt(req.params.sale_id);
//     const sale = await Sale.update(
//       { items: ['books'] },
//       {
//         where: {
//           id: saleId
//         }
//       }
//     );
//     res.send(sale);
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  CreateSale,
  GetSaleWithBooks
  // UpdateSale
};
