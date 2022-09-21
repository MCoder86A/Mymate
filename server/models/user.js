const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    group: [mongoose.Types.ObjectId]
},{ timestamps: true})

module.exports = user = mongoose.model("user", userSchema);