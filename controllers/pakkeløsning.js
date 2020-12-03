const Pakkeløsning = require('../models/pakkeløsning');

// exports.opretPakkeløsning = function(pakkeNavn, pris, timePris, beskrivelse) {
//     return Pakkeløsning.create({
//         pakkeNavn,
//         pris,
//         timePris
//         beskrivelse
//     })
// }

exports.opretPakkeløsning = function(pakkeNavn, tid, pris, timePris, beskrivelse) {
    const newPL = Pakkeløsning ({
        pakkeNavn: pakkeNavn,
        tid: tid,
        pris: pris,
        timePris: timePris,
        beskrivelse: beskrivelse
    })

    newPL.save();
    return newPL;
}

exports.getPakkeløsninger = function() {
    return Pakkeløsning.find().exec()
}