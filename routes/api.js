const express = require('express');
const router = express.Router();
const controller = require('../controllers/booking');

router.get('/', (req, res) => {

})

router.get('/api/bookinger', async (req, res) => {
    try {
        const bookinger = await controller.hentBookinger();
        const bookingerJSON = JSON.stringify(bookinger);
        res.send(bookingerJSON)
    } catch (error) {
        console.log(error);
    }
})