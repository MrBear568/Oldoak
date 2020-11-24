const Login = require('../models/login');

exports.opretLogin = function(username, password) {
    return Login.create({
        username,
        password
    })
}

exports.getLogins = function() {
    return Login.find().exec()
}
