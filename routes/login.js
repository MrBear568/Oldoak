const express = require('express');
const router = express.Router();

router.get('/auth', async (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const user = {
        username: req.body.username, 
        password: req.body.password
    }
    //console.log(user);
    if (checkUser(user)) {
        req.session.isLoggedIn = true;
        res.render('admin');
    } else {
        res.redirect('/');
    }

});
/*
function checkUser(user) {
    // ned i db og find user.username, user.password (hashed)
    return true;
}
*/

module.exports = router;