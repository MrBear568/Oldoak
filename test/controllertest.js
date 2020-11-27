const should = require('should')
// const {opretMail} = require('../controllers/mail.js')
const mail = require('../controllers/mail.js')

describe('controller test - promise', function () {
    it('test', async () => {
      var mail = {
        ejerNavn: 'Mika',
        mail: 'oldoak@gmail.com'
    };
      const mailResult = mail.opretMail('Mika', 'oldoak@gmail.com')
      mailResult.ejerNavn.should.be.equals('Mika')
      mailResult.mail.should.be.equals('oldoak@gmail.com')
    });
  });
  