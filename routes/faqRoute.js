const express = require('express');
const router = express.Router();


let text = [{overskrift: 'SNAKKER DU/ FORSTÅR DU DANSK?', txt: 'Jeg forstår det meste dansk og kan snakke en smule også, så det helt fint at kommunikere på dansk, hvis det er nemmest for dig.'}, 
{overskrift: ' HVOR KAN JEG SE DINE PRISER?', txt: 'Jeg tilbyder bryllups pakker : Ceremoni & Portrætter (2 timer) 5.000DKK Halv Dag (5 timer) 10.000DKK Hel Dag (10 timer) 16.000DKK Forlænget Dag (13 timer) 18.000DKK +Transport ydelser for alle.'}, 
{overskrift: 'HVOR LANG TID BRUGER DU PÅ AT REDIGERE BILLEDERNE?', txt: 'For det meste tager det 5-7 uger at redigere billederne. Det kan variere, nogle gange kan det tage lidt mindre tid, andre gange mere. Det kommer an på hvor travl sæsonen er. Imellem kvalitet og deadlines, så vælger jeg altid kvalitet. Jeg vil altid putte alt kærligheden og opmærksomheden i mit arbejde, fordi billederne jeg skaber vil vare ved for evigt.'}]

router.get('/faq', async (req, res) =>{
    res.render('faq', {texts: text});
})


module.exports = router;