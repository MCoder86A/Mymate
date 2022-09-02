const express = require('express')

const signup = require('./routes/signup')
const config = require('./config/server')

const app = express()
const {PORT} = config

app.use(express.urlencoded())
app.use(express.json())
app.use('/signup', signup)

app.get('/', (req,res)=>{
    res.send("Hello")
})


app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})
