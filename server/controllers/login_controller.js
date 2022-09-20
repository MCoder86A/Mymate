const user = require('../models/user')
const bcrypt = require('bcrypt')
const jsontoken = require('jsonwebtoken')

const login = async(req, res)=>{
    user.findOne({
        username: req.body.username
    },async(err, result)=>{
        if(err){
            res.json({status: "error"})
        }
        if(result){
            await new Promise((resolve, rej)=>{
                bcrypt.compare(req.body.password, result.password,(err, same)=>{
                    if(same){
                        token = jsontoken.sign({userID:result._id},
                            process.env.SECRET,{expiresIn:"10d"})

                        res.json({
                            status: "sucessfully login",
                            "x-access-token": token
                        })
                    }
                    else{
                        res.json({status: "wrong password"})
                    }
                })
            })
        }
        else{
            res.json({status: "username not found"})
        }
    })
}


module.exports = login