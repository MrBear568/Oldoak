const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');

const logins = await controller.getLogins();

router.get('/auth', async (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const logins = await controller.getLogins();
    const user = {
        username: logins.getLogins.username, 
        password: logins.getLogins.password
    }
    //console.log(user);
    if (checkUser(user)) {
        req.session.isLoggedIn = true;
        res.render('admin', {login: logins});
    } else {
        res.redirect('/');
    }

});

function checkUser(user) {
    if (req.body.username === user.getLogins.username && req.body.password === user.getLogins.password) 
    return true;
}


module.exports = router;