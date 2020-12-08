const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.redirect('/hjem')
    } catch (error) {
        console.log(error)
    }
})

router.get('/hjem', async (req, res) => {
    res.render('forside');
})

module.exports = router;