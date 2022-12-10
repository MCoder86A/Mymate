const mongoose = require('mongoose')

const db = mongoose.connect(process.env.MONGO_URI,()=>{
    console.log(`Connected to mongoDB server: ${process.env.MONGO_URI}`)
});

module.exports = db
