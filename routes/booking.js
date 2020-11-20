const express = require('express');
const router = express.Router();

router.get('/booking', async (req, res) => {
    res.render('booking');
})

module.exports = router;

