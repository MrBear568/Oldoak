const express = require('express');
const router = express.Router();
const controller = require('../controllers/kontakt');

router.get('/api/requests', async (req, res) => {
    try {
        const requests = await controller.hentRequests();
        const requestsJSON = JSON.stringify(requests);
        res.send(requestsJSON);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;