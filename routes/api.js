const express = require('express');
const router = express.Router();
const controller = require('../controllers/contact');

router.get('/', (req, res) => {

})

router.get('/api/bookinger', async (req, res) => {
    try {
        const contacts = await controller.hentContacts();
        const contactsJSON = JSON.stringify(contacts);
        res.send(contactsJSON)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;