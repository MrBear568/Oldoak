const mongoose = require('mongoose');

const Booking = new mongoose.Schema({
    emne: String,
    kundeEmail: String,
    kundeNavn: String,
    kundeTlf: String,
    besked: String,
    dato: Date,
    status: { type: Boolean, default: false }
});


module.exports = mongoose.model('Booking', Booking);