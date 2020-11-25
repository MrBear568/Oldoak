const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

router.get('/', async (req, res) =>{
    try {
        res.redirect('/home')
    } catch (error) {
        console.log(error)
    }
})

router.get('/home', async (req, res) =>{
    res.render('forside');
})

module.exports = router;