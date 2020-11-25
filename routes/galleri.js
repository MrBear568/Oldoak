const express = require('express');
const router = express.Router();
const fs = require('fs').promises



router.get('/galleri', async (req, res) =>{
    let billeder = require('../public/pictures/galleri');
    res.render('galleri', {billede: billeder});
})


module.exports = router;