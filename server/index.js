const express = require('express')
const cookieParser = require('cookie-parser')
const config = require('dotenv').config()

require('./config/db')

//Router imports
const {
    login, group, signup, profile
} = require('./routes')

const app = express()

app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())

//ROUTER
app.use('/signup', signup)
app.use('/login', login)
app.use('/group', group)
app.use('/profile', profile)

app.get('/', (req,res)=>{
    res.send("Hello")
})


app.listen(process.env.PORT, ()=>{
    console.log(`Listening on port: ${process.env.PORT}`)
})
