const User = require('../models/user')
const bcrypt = require('bcrypt')
const jsontoken = require('jsonwebtoken')

const login = async(req, res)=>{
    let user;
    try {
        user = await User.findOne({
            username: req.body.username
        })
        
    } catch (error) {
        console.log(error)
    }

    if(!user){
        return res.json({
            status: '400',
            message: 'username not found'
        })
    }

    const isMatch = await new Promise((resolve,reject)=>{
        try {
            const _match = bcrypt.compareSync(
                req.body.password,
                user.password)
            resolve(_match)
        } catch (error) {
            console.log(error)
            return;
        }
    })

    if(isMatch){
        token = jsontoken.sign({
            userID:user._id,
            name: user.name,
            username: user.username
        },
        process.env.SECRET,{expiresIn:"10d"})
        
        return res.json({
            status: '200',
            message: "sucessfully login",
            "x-access-token": token
        })
    }
    else{
        return res.json({
            status: '400',
            message: "wrong password"
        })
    }
}


module.exports = login