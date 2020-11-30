const assert = require('chai').assert
const mail = require('../controllers/mail')

describe('controller test - promise', function () {
    it('opretMail skulle retunere en ny mail', async function (){
      const mailResult = await mail.opretMail('Mika', 'oldoak@gmail.com')
      
      assert.equal(mailResult.ejerNavn, 'Mika')
      assert.equal(mailResult.mail, 'oldoak@gmail.com')
    });
  });
  