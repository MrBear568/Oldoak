const express = require('express');
const router = express.Router();
const controller = require('../controllers/language');

router.get('/omMig', (req, res) =>{
   // let lang = controller.getLanguage();
   // console.log(lang)
   const lang = req.session.sprog
    res.render('omMig');
})

module.exports = router;