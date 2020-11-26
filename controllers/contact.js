const Contact = require('../models/contact');

exports.opretContact = function (emne, kundeEmail, kundeNavn, kundeTlf, besked, dato, status) {
    return Contact.create({
        emne,
        kundeEmail,
        kundeNavn,
        kundeTlf,
        besked,
        dato,
        status
    })
}

exports.hentContacts = async function () {
    return await Contact.find().exec();
}

exports.hentContactPåDato = async function (dato) {
    return await Contact.find().where('dato').equals(dato).exec();
}