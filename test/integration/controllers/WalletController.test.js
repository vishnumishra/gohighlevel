const assert = require('assert');
var supertest = require('supertest');

describe('Wallet (controller)', () => {

    describe('#Setup()', () => {
        it('should setup a wallet', (done) => {
            supertest(sails.hooks.http.app)
                .post('/setup')
                .send({
                    "balance": 10,
                    "name": "vishnu mishra"
                })
                .expect(201)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }

                    assert.equal(res.body.balance, 10);
                    assert.ok(res.body.transactionId > 0);
                    assert.equal(res.body.name, 'vishnu mishra');
                    assert.ok(res.body.id > 0);
                    done();
                })
        });
    });

});
