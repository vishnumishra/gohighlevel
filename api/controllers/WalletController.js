/**
 * WalletController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: async function (req, res) {

        let { balance, name } = req.body;
        try {
            let discription = 'setup';
            let wallet = await Wallet.create({ balance, name }).fetch();
            let transact = await Transaction.create({
                amount: balance,
                discription,
                walletId: wallet.id,
                balance
            }).fetch();

            res.status(201).send({ ...wallet, transactionId: transact.id });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    find: async function (req, res) {
        let { id } = req.params;
        if (!id) {
            return res.status(400).send({ message: 'id is required' });
        }
        try {
            let wallet = await Wallet.findOne({ where: { id } });
            res.json(wallet);
        } catch (error) {
            res.status(500).send(error);
        }
    }

};

