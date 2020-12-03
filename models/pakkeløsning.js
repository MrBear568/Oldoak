const mongoose = require('mongoose');

const Pakkeløsning = new mongoose.Schema({
    pakkeNavn: String,
    tid: String,
    pris: String,
    timePris: String,
    beskrivelse: String
})

module.exports = mongoose.model('Pakkeløsning', Pakkeløsning)