const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    name: String,
    description: String,
    admin: mongoose.Types.ObjectId,
    member: [mongoose.Types.ObjectId]
}, {timestamps: true})

const group = mongoose.model("group", groupSchema)

module.exports = group