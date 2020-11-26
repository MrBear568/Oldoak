const express = require('express');
const { pathToFileURL } = require('url');
const router = express.Router();
const fs = require('fs').promises



router.get('/galleri', async (req, res) =>{
    billede = await fs.readdir(__dirname + '/billeder');
    res.render('galleri');
    //{filnavne}
})

router.post('/galleri', async (req, res) =>{
    console.log('forbindelse');
})



module.exports = router;