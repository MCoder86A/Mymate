module.exports = {
    ...require('./group'),
    ...require('./profile'),
    login_controller: require('./login_controller'),
    signup_controller: require('./signup_controller')
}