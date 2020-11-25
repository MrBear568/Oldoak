const express = require('express');
const router = express.Router();

router.get('/galleri', async (req, res) =>{
    res.render('galleri');
})


module.exports = router;