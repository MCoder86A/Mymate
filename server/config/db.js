const mongoose = require('mongoose')

const db = mongoose.connect('mongodb://localhost:27017/mymate',()=>{
    console.log('Connected to mongoDB')
});

module.exports = db
