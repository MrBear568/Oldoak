const Pakkeløsning = require('../models/pakkeløsning');

exports.opretPakkeløsning = function(pakkeNavn, pris, beskrivelse) {
    return Pakkeløsning.create({
        pakkeNavn,
        pris,
        beskrivelse
    })
}

exports.getPakkeløsninger = function() {
    return Pakkeløsning.find().exec()
}