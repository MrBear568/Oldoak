const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');

const logins = controller.getLogins();

router.get('/login', async (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    /*
    const logins = await controller.getLogins();
    const user = {
        username: logins.getLogins.username, 
        password: logins.getLogins.password
    }
    */
    const user = {
    username: req.body.username, 
    password: req.body.password
    }
    console.log(user);
    if (checkUser(user)) {
        req.session.isLoggedIn = true;
        res.redirect('/admin')
        res.render('admin')

        //res.render('admin', {login: logins});
    } else {
        res.redirect('/');
    }

});
/*
router.get('/admin', async (req,res) => {
    if (req.session.isLoggedIn = true) {
        res.render('admin')
    }
});
*/


function checkUser(user) {
    /*
    if (req.body.username === user.getLogins.username && req.body.password === user.getLogins.password) 
    return true;
    */
    if (user.password === "admin" && user.username === "admin") {
    return true;
    } else {
    return false;
    }
}


module.exports = router;