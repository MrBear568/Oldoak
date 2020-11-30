const Login = require('../models/login');

// exports.opretLogin = function(username, password) {
//     return Login.create({
//         username,
//         password
//     })
// }

exports.opretLogin = function(username, password) {
    const newLogin = Login ({
        username: username,
        password: password
    })

    newLogin.save();
    return newLogin;
}

exports.getLogins = async function() {
    return Login.find().exec()
}

exports.checkUser = function(user) {
    if (user.password === getLogins().password && user.username === getLogins().username) {
        return true;
        } else {
        return false;
        }
}