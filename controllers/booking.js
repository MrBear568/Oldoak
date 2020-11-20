const Booking = require('../models/booking');

exports.opretBooking = function (emne, kundeEmail, kundeNavn, kundeTlf, dato, status) {
    return Booking.create({
        emne,
        kundeEmail,
        kundeNavn,
        kundeTlf,
        dato,
        status
    })
}

exports.hentBookinger = function () {
    return Booking.find().exec();
}