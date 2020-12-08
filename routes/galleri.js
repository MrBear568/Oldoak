const express = require('express');
const router = express.Router();
const fs = require('fs').promises

router.get('/galleri', async (req, res) => {
    billeder = "";
    res.render('galleri', { billeder });
})

router.post('/galleri', async (req, res) => {
    let sommer = req.body.sommer;
    let vinter = req.body.vinter;
    let efterår = req.body.efterår;
    let forår = req.body.forår;

    if (sommer !== undefined) {
        let billeder = await fs.readdir(__dirname + "/billeder/sommer");
        let overskrift = 'sommer'
        console.log(billeder)
        res.render('billeder', { overskrift, billeder });
    }
    if (vinter !== undefined) {
        let billeder = await fs.readdir(__dirname + "/billeder/vinter");
        let overskrift = 'vinter'
        res.render('billeder', { overskrift, billeder });
    }
    if (efterår !== undefined) {
        let billeder = await fs.readdir(__dirname + "/billeder/efterår");
        let overskrift = 'efterår'
        res.render('billeder', { overskrift, billeder });
    }
    if (forår !== undefined) {
        let billeder = await fs.readdir(__dirname + "/billeder/forår");
        let overskrift = 'forår'
        res.render('billeder', { overskrift, billeder });
    }
})

router.get('/galleri/billeder', async (req, res) => {
    res.render('billeder');
})



module.exports = router;