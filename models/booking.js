const mongoose = require('mongoose');

const Booking = new mongoose.Schema({
    emne: String,
    kundeEmail: String,
    kundeNavn: String,
    kundeTlf: String,
    dato: Date,
    status: Boolean,
});


module.exports = mongoose.model('Booking', Booking);