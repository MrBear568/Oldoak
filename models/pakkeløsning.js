const mongoose = require('mongoose');

const Pakkeløsning = new mongoose.Schema({
    pakkeNavn: String,
    pris: Number,
    beskrivelse: String
})

module.exports = mongoose.model('Pakkeløsning', Pakkeløsning)