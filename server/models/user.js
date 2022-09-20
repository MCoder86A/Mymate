const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String
},{ timestamps: true})

module.exports = user = mongoose.model("user", userSchema);