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
    let test = req.body.sommer;
    if(test === undefined){
        console.log("den kører på: " + test);
    }
})



module.exports = router;