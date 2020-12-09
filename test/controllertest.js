const assert = require('chai').assert
const mail = require('../controllers/mail')
const login = require('../controllers/login')
const pakkeløsning = require('../controllers/pakkeløsning')
const request = require('../controllers/kontakt')

describe('controller test - promise, oprettelse af mail med ejernavn og mail', function () {
    it('opretMail skulle retunere en ny mail', async function (){
      const mailResult = await mail.opretMail('Mika', 'oldoak@gmail.com')
      
      assert.equal(mailResult.ejerNavn, 'Mika')
      assert.equal(mailResult.mail, 'oldoak@gmail.com')
    });
  });

describe('controller test - promise, oprettelse af login', function () {
    it('opretLogin skulle retunere et nyt login med username og password', async function (){
      const loginResult = await login.opretLogin('MrBear', '1362')
      
      assert.equal(loginResult.username, 'MrBear')
      assert.equal(loginResult.password, '1362')
    });
  });
  
describe('controller test - promise, oprettelse af pakkeløsning', function () {
    it('opretLogin skulle retunere en ny pakkeløsning med pakkenavn, pris og beskrivelse', async function (){
      const date = Date.now;
      const pakkeløsningResult = await pakkeløsning.opretPakkeløsning('SommerTilbud', date, 500, 100,'Fra juni - Juli')

      assert.equal(pakkeløsningResult.pakkeNavn, 'SommerTilbud')
      assert.equal(pakkeløsningResult.tid, date)
      assert.equal(pakkeløsningResult.pris, 500)
      assert.equal(pakkeløsningResult.timePris, 100)
      assert.equal(pakkeløsningResult.beskrivelse, 'Fra juni - Juli')
    });
  });

describe('controller test - promise, oprettelse af request', function () {
    it('opretLogin skulle retunere en ny request og alt der tilhører', async function (){
      const requestResult = await request.opretRequest('Booking', 'bjrn.werner@gmail.com', 'Bear', '25754242', 
      'Vil gerne booke', 2015-04-04, false)
      
      assert.equal(requestResult.emne, 'Booking')
      assert.equal(requestResult.kundeEmail, 'bjrn.werner@gmail.com')
      assert.equal(requestResult.kundeNavn, 'Bear')
      assert.equal(requestResult.kundeTlf, '25754242')
      assert.equal(requestResult.besked, 'Vil gerne booke')
      //assert.equal(requestResult.dato, 2015-04-04)
      assert.equal(requestResult.status, false)
    });
  });