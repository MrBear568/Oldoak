const should = require('should')

var mail = {
    ejerNavn: 'Mika',
    mail: 'oldoak@gmail.com'
};

describe('Mail controller test - promise', function () {
    it('test', async () => {
      mail.ejerNavn.should.be.equals('Mika')
      mail.mail.should.be.equals('oldoak@gmail.com')
    });
  });
  