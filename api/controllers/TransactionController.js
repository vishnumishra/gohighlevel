/**
 * TransactionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { CREDIT, DEBIT } = require('../../config/Const');
const flaverr = require('flaverr');

module.exports = {

  create: async function (req, res) {
    let { walletId: id } = req.params;
    let { amount, description } = req.body;
    try {
      let wallet = await Wallet.findOne({ where: { id } });
      if(!wallet) {
        return res.status(404).send({ message: 'wallet not found' });
        }
      let balance = wallet.balance + amount;
      if (balance < 0) {
        throw flaverr('E_NOt_ENOUGHT_MONEY', new Error('You have not enough money, for this transaction'));
      }
      await Wallet.update({ id }).set({ balance });
      let type = amount > 0 ? CREDIT : DEBIT;
      let transact = await Transaction.create({
        walletId: wallet.id,
        amount,
        description,
        type, balance
      }).fetch();

      res.status(201).send({ balance, transactionId: transact.id });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  find: async function (req, res) {
    let { walletId, skip, limit } = req.query;
    try {
      let transaction = await Transaction.find({
        where: { walletId },
        skip,
        limit,
        sort: 'createdAt DESC'
      });
      res.json(transaction);
    } catch (error) {
      res.status(500).send(error);
    }
  }

};

