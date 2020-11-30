const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');
const Mail = require('../models/mail');
const nodemailer = require('nodemailer');
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;


router.get('/contact', async (req, res) => {
    res.render('contact', { title: 'Contact' });
});

router.post('/contact', async (req, res) => {

    const emne = req.body.emne;
    const email = req.body.email;
    const navn = req.body.navn;
    const tlfnummer = req.body.tlfNummer;
    const besked = req.body.besked;
    const dato = req.body.dato;
    try {
        console.log(emne, email, navn, tlfnummer, besked, dato);
        console.log(dato, today)
        if (dato <= today) {
            console.log('Datoen er før');
        } else if (emne.length === 0) {
            let emneerror = document.getElementById('emneerror');
            emneerror.innerHTML = '*';
        } else {
            await controller.opretRequest(emne, email, navn, tlfnummer, besked, dato).then(() => {
                res.redirect('/contact');

            });
            let mail = Mail.find().where('email').equals('owmailbot@gmail.com');

            console.log(mail);

            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'owmailbot@gmail.com',
                    pass: 'gammeleg7700'
                }
            })

            let mailOptions = {
                from: 'owmailbot@gmail.com',
                to: 'mikahoejegaard@gmail.com',
                subject: emne,
                text: besked + '\n' +
                    'Ønsket dato: ' + dato + '\n' + '\n' +
                    'Med venlig hilsen,' + '\n'
                    + navn + '\n' +

                    '\n' + '\n' +
                    'Email: ' + email + '\n' +
                    'Tlf. nummer: ' + tlfnummer
            }

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Mail er sendt: ' + info.response);
                }
            })
        }
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;

