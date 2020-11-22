const express = require('express');
const router = express.Router();

router.get('/priser', async (req, res) => {
    res.render('pakkeløsning');
});

module.exports = router;
