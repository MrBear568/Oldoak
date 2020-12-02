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

    // nedenfor skal ikke være kommentar

    // if (checkUser) {
    //     req.session.isLoggedIn = true;
    //     res.redirect('/admin')
    // } else {
    //     res.redirect('/home');
    // }

});

router.get('/admin', async (req,res) => {
    res.render('admin')

    // nedenfor skal ikke være kommentar
    
    // if (req.session.isLoggedIn === true) {
    //     res.render('admin')
    // } else {
    //     res.redirect('/login')
    // }
});

router.post('/admin', async(req,res) => {
    let booking = req.body.booking;
    let galleri = req.body.galleri;
    let forside = req.body.forside;
    let faq = req.body.faq;
    let ommig = req.body.ommig;
    let contact = req.body.contact;

    if (booking !== undefined) {
        res.redirect('/admin/booking')
    }

    if (galleri !== undefined) {
        res.redirect('/admin/galleri')
    }

    if (forside !== undefined) {
        res.redirect('/admin/forside')
    }

    if (faq !== undefined) {
        res.redirect('/admin/faq')
    }

    if (ommig !== undefined) {
        res.redirect('/admin/ommig')
    }

    if (contact !== undefined) {
        res.redirect('/admin/contact')
    }
})

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
router.get('/admin/contact', async (req,res) => {
    res.render('admincontact')
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