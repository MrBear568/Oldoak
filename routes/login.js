const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');

const logins = controller.getLogins();

router.get('/login', async (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    /*
    const user = {
        usernamegemt: logins.getLogins.username, 
        passwordgemt: logins.getLogins.password
    }
    */
    
    const user = {
    username: req.body.username, 
    password: req.body.password
    }
    console.log(user);
    console.log(logins);
    if (checkUser(user)) {
        req.session.isLoggedIn = true;
        res.redirect('/admin')

        //res.render('admin', {login: logins});
    } else {
        res.redirect('/home');
    }

});

router.get('/admin', async (req,res) => {
    if (req.session.isLoggedIn === true) {
        res.render('admin')
    } else {
        res.redirect('/login')
    }
});



function checkUser(user) {
    if (user.password === logins.password && user.username === logins.username) {
    return true;
    } else {
    return false;
    }
}


module.exports = router;