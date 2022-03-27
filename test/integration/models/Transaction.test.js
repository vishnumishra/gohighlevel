const assert = require('assert');

describe('Transaction (model)', () => {

    describe('#Create()', () => {
        it('should create a Transaction', (done) => {
            Transaction.create({
                walletId: 1,
                amount: 10,
                description: 'setup',
                type: 'CREDIT',
                balance: 10
            }).fetch().then((transaction) => {
                assert.ok(transaction.id);
                assert.equal(transaction.amount, 10);
                assert.equal(transaction.description, 'setup');
                assert.equal(transaction.type, 'CREDIT');
                assert.equal(transaction.balance, 10);
                return done();

            })
                .catch(done);
        });

    });
    describe('#Update()', () => {
        it('should update a Transaction', async () => {
            let [transaction, ...rest] = await Transaction.find({});
            let [updatedTransact] = await Transaction.update({ id: transaction.id }).set({ amount: 10 }).fetch()
            assert.ok(updatedTransact.id > 0);
            assert.equal(updatedTransact.amount, 10);
        })
    });

});
