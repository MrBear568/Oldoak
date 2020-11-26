const express = require('express');
const { pathToFileURL } = require('url');
const router = express.Router();
const fs = require('fs').promises



router.get('/galleri', async (req, res) =>{
    billede = await fs.readdir(__dirname + '/billeder');
    console.log(billede);
    res.render('galleri');
    //{filnavne}
})



module.exports = router;