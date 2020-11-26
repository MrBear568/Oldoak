const mongoose = require('mongoose');

const Mail = new mongoose.Schema({
    ejerNavn: String,
    mail: String
});

module.exports = mongoose.model('Mail', Mail);