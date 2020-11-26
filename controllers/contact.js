const Contact = require('../models/contact');

exports.opretBooking = function (emne, kundeEmail, kundeNavn, kundeTlf, besked, dato, status) {
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

exports.hentBookinger = async function () {
    return await Contact.find().exec();
}

exports.hentBookingPåDato = async function (dato) {
    return await Contact.find().where('dato').equals(dato).exec();
}