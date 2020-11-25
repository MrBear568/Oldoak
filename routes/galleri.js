const express = require('express');
const router = express.Router();
const fs = require('fs').promises

router.get('/galleri', async (req, res) =>{
    let filnavne = await fs.readdir(__dirname + "/pictures/galleri")
    res.render('galleri', {billede: filnavne});
})


module.exports = router;