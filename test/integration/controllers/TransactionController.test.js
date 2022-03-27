const assert = require('assert');
var supertest = require('supertest');

describe('Transaction (controller)', () => {

    describe('#Create()', () => {
        it('should add a new transaction', async () => {
            const [wallet] = await Wallet.find({});
            let amount = 10;
            supertest(sails.hooks.http.app)
                .post(`/transact/${wallet.id}`)
                .send({
                    amount,
                    "description": "For addition test15!"
                })
                .expect(201)
                .end((err, res) => {
                    if (err) {
                        throw err;
                    }

                    assert.equal(res.body.balance, wallet.balance + amount);
                    assert.ok(res.body.transactionId > 0);
                })
        });
    });

});
