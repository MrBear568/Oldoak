const express = require('express');
const router = express.Router();

router.get('/fag', (req, res) =>{
    res.render('fag');
})

module.exports = router;