const express = require('express');
const router = express.Router();
const controller = require('../controllers/pakkeløsning');

router.get('/priser', async (req, res) => {
    controller.getPakkeløsninger();
    res.render('pakkeløsning', {pakkeløsninger: pakkeløsninger});
});

module.exports = router;
