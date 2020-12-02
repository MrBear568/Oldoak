const Mail = require('../models/mail');

// exports.opretMail = function (ejerNavn, mail) {
//     return Mail.create({
//         ejerNavn,
//         mail
//     })
// }

exports.opretMail = function (ejerNavn, mail) {
    const newMail = Mail({
        ejerNavn: ejerNavn, 
        mail: mail
    });
    newMail.save();
    return newMail;
}





