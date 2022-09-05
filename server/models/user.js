const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String
})

module.exports = user = mongoose.model("user", userSchema);