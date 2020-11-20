const express = require('express');
const router = express.Router();
const calendar = require('fullcalendar');

router.get('/booking', async (req, res) => {
    try {
        res.render('booking')
    } catch (error) {

    }
})