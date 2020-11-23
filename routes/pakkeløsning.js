const express = require('express');
const router = express.Router();
const controller = require('../controllers/pakkeløsning');

router.get('/priser', async (req, res) => {
    const pakkeløsninger = await controller.getPakkeløsninger();
    res.render('pakkeløsning', {pakkelosninger: pakkeløsninger});
});

module.exports = router;
