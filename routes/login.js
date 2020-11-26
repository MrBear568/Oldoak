const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');

// controller.getUser()

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
    console.log(controller.getLogins());
    console.log(user.username); // giver det man skriver i username input
    console.log(user.password) // giver det man skriver i password input
    console.log(controller.getLogins().password) // undefiend
    console.log(controller.getLogins().username) // undefiend
    if (checkUser(user)) {
        req.session.isLoggedIn = true;
        res.redirect('/admin')
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
    if (user.password === controller.getLogins().password && user.username === controller.getLogins().username) {
    return true;
    } else {
    return false;
    }
}


module.exports = router;