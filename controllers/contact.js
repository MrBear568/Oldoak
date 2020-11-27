const Request = require('../models/contact');

exports.opretRequest = function (emne, kundeEmail, kundeNavn, kundeTlf, besked, dato, status) {
    return Request.create({
        emne,
        kundeEmail,
        kundeNavn,
        kundeTlf,
        besked,
        dato,
        status
    })
}

exports.hentRequests = async function () {
    return await Request.find().exec();
}

exports.hentRequestPåDato = async function (dato) {
    return await Request.find().where('dato').equals(dato).exec();
}