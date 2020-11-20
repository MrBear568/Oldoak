const express = require('express');
const router = express.Router();


router.get('/booking', async (req, res) => {
    res.render('booking', { title: 'Booking' });
})

module.exports = router;

