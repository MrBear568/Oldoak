const Booking = require('../models/booking');

exports.opretBooking = function (emne, kundeEmail, kundeNavn, kundeTlf, besked, dato, status) {
    return Booking.create({
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
    return await Booking.find().exec();
}

exports.hentBookingPåDato = async function (dato) {
    return await Booking.find().where('dato').equals(dato).exec();
}