const express = require('express');
const router = express.Router();
const fs = require('fs').promises;

router.get('/home', async (req, res) =>{
    res.render('forside');
})

module.exports = router;