const express = require('express');
const router = express.Router();

let text = {overskrift: 'Dette er en overskrift', brødtext: 'Dette er en brødtext'}

router.get('/fag', (req, res) =>{
    res.render('fag', texts);
})

module.exports = router;