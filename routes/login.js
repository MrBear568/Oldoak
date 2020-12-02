const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');



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

    //skal pakkes ud
    await controller.getLogins().then((resolve, reject) => {
        let logins = (resolve.username, resolve.password);
        return controller.getLogins(logins.username, logins.password)
        .catch(fejl => console.log('fejl' + fejl))
    });
    const checkUser = controller.checkUser(user);

    console.log(user);
    console.log(logins);
    console.log(user.username); // giver det man skriver i username input
    console.log(user.password) // giver det man skriver i password input
    console.log(logins.password) // undefiend
    console.log(logins.username) // undefiend
    if (checkUser) {
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
// adminbooking pug render route
router.get('/admin/booking', async (req,res) => {
    res.render('adminbooking')
});

// admingalleri pug render route
router.get('/admin/galleri', async (req,res) => {
    res.render('admingalleri')
});

// adminforside pug render route
router.get('/admin/forside', async (req,res) => {
    res.render('adminforside')
});

// adminfaq pug render route
router.get('/admin/faq', async (req,res) => {
    res.render('adminfaq')
});

// adminommig pug render route
router.get('/admin/ommig', async (req,res) => {
    res.render('adminommig')
});

// admincontakt pug render route
router.get('/admin/contakt', async (req,res) => {
    res.render('contakt')
});


/*
function checkUser(user) {
    if (user.password === controller.getLogins().password && user.username === controller.getLogins().username) {
    return true;
    } else {
    return false;
    }
}
*/


module.exports = router;