const express = require('express');
const router = express.Router();

router.get('/omMig', (req, res) =>{
    res.render('omMig');
})

module.exports = router;