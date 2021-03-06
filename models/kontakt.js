const mongoose = require('mongoose');

const Request = new mongoose.Schema({
    emne: String,
    kundeEmail: String,
    kundeNavn: String,
    kundeTlf: String,
    besked: String,
    dato: Date,
    status: { type: Boolean, default: false }
});

module.exports = mongoose.model('Request', Request);