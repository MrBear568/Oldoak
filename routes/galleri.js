const express = require('express');
const { pathToFileURL } = require('url');
const router = express.Router();
const fs = require('fs').promises

router.get('/galleri', async (req, res) =>{
    filnavne = "";
    res.render('galleri', {filnavne});
})

router.post('/galleri', async (req, res) =>{
    let sommer = req.body.sommer;
    let vinter = req.body.vinter;
    let efterår = req.body.efterår;
    let forår = req.body.forår;
        /*
       document.querySelectorAll('.accordian__button').forEach(button =>{
           button.addEventListener('click', () =>{
               const accordianContent = button.nextElementSibling;

               button.classList.toggle('accordian__button--active');

               if(button.classList.contains('accordian__button--active')){
                   accordianContent.style.maxHeight = accordianContent.scrollHeight + 'px'; 
               } else {
                   accordianContent.style.maxHeight = 0; 
               }
           })
       })
       */
    

    if(sommer !== undefined){
        let filnavne = await fs.readdir(__dirname + "/billeder/sommer");
        console.log(filnavne)
        res.render('galleri', {filnavne});
    }
    if(vinter !== undefined){
        let filnavne = await fs.readdir(__dirname + "/billeder/vinter");
        console.log(filnavne)
        res.render('galleri', {filnavne});
    }
    if(efterår !== undefined){
        console.log('efterår');
    }
    if(forår !== undefined){
        console.log('forår');
    }
})



module.exports = router;