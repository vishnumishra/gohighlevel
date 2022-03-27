const assert = require('assert');

describe('Wallet (model)', () => {

  describe('#Create()', () => {
    it('should create a wallet', (done) => {
      Wallet.create({
        'balance': 10,
        'name': 'Vishnu'
      }).fetch()
                .then((wallet) => {
                    assert.ok(wallet.id);
                    assert.equal(wallet.name, 'Vishnu');
                    assert.equal(wallet.balance, 10);
                  return done();

                })
                .catch(done);
    });
  });

});
