const express = require('express')
require('./config/db')
const signup = require('./routes/signup')
const login = require('./routes/login')
const config = require('./config/server')

const app = express()
const {PORT} = config

app.use(express.urlencoded())
app.use(express.json())

app.use('/signup', signup)
app.use('/login', login)

app.get('/', (req,res)=>{
    res.send("Hello")
})


app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`)
})
