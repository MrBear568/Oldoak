const Mail = require('../models/mail');

exports.opretMail = function (ejerNavn, mail) {
    return Mail.create({
        ejerNavn,
        mail
    })
}





