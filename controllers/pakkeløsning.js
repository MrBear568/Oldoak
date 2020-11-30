const Pakkeløsning = require('../models/pakkeløsning');

// exports.opretPakkeløsning = function(pakkeNavn, pris, beskrivelse) {
//     return Pakkeløsning.create({
//         pakkeNavn,
//         pris,
//         beskrivelse
//     })
// }

exports.opretPakkeløsning = function(pakkeNavn, pris, beskrivelse) {
    const newPL = Pakkeløsning ({
        pakkeNavn: pakkeNavn,
        pris: pris,
        beskrivelse: beskrivelse
    })

    newPL.save();
    return newPL;
}

exports.getPakkeløsninger = function() {
    return Pakkeløsning.find().exec()
}