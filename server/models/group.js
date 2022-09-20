const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    name: String,
    admin: 'ObjectId',
    member: Number
}, {timestamps: true})

const group = new mongoose.model("group", groupSchema)

module.exports = group