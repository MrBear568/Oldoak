const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

router.get('/omMig', async (req, res) =>{
    let pics = await fs.readdir(__dirname + '../pictures')
    res.render('omMig', {pics: pics});
})

module.exports = router;