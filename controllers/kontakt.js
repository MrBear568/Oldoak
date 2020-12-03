const Request = require('../models/kontakt');

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

// exports.opretRequest = function (emne, kundeEmail, kundeNavn, kundeTlf, besked, dato, status) {
//     const newRequest = Request({
//         emne: emne,
//         kundeEmail: kundeEmail,
//         kundeNavn: kundeNavn,
//         kundeTlf: kundeTlf,
//         besked: besked,
//         dato: dato,
//         status: status
//     })
//     newRequest.save();
//     return newRequest;
// }

exports.hentRequests = async function () {
    return await Request.find().exec();
}

exports.hentRequestPåDato = async function (dato) {
    return await Request.find().where('dato').equals(dato).exec();
}