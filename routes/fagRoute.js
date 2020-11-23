const express = require('express');
const router = express.Router();


let text = [{overskrift: 'DO YOU SPEAK/ UNDERSTAND DANISH?', txt: 'I understand most of Danish and can speak little as well, so feel free to communicate in Danish if thats the easiest for you.'}, 
{overskrift: ' WHERE CAN I SEE YOUR PRICES?', txt: 'I offer 4 wedding packages: Ceremony & Portraits (2 hours) 5.000DKK Half Day (5 hours) 10.000DKK Whole Day (10 hours) 16.000DKK Extended Day (13 hours) 18.000DKK +Transport Expenses for all.'}, 
{overskrift: 'HOW LONG DO YOU TAKE TO EDIT THE PHOTOS?', txt: 'I usually take 5-7 weeks to edit the photos. Sometimes it takes little less and sometimes a bit more, it depends on how busy the season is. Between quality and deadlines I will always choose the first one. I will always put all the love and attention into my work, because the photographs I create will last forever.'}]

router.get('/fag', async (req, res) =>{
    res.render('fag', {texts: text});
})


module.exports = router;