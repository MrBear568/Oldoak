const express = require('express');
const router = express.Router();

const fs = require('fs').promises


let text = [{overskrift: 'Dette er en overskrift', brødtext: 'Dette er en brødtext'}, {overskrift: 'Dette er en overskrift', brødtext: 'Dette er en brødtext'}]

router.get('/fag', async (req, res) =>{
    let filnavne = await fs.readdir(__dirname + "/filer")
    res.render('fag', {texts: text, fil: filnavne});
})


module.exports = router;