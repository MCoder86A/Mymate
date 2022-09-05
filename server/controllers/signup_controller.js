const user = require('../models/user')
const bcrtypt = require('bcrypt')

const signup_controller = async (req, res)=>{
    password = await new Promise((resolve, reject)=>{
        bcrtypt.hash(req.body.password, 10, (err,hash)=>{
            if(err){
                console.log("Error in hashing")
                reject(err);
            }
            resolve(hash)
        })
    })
    
    username = req.body.username
    _name = req.body.name
    const newUser = new user({
        username:username,
        password:password,
        name:_name
    })
    user.find({username:username}, (err,docs)=>{
        if(err){
            res.json({status: "failed"});
        }
        if(docs.length){
            console.log(docs)
            res.json({status: "already signup"})
        }
        else{
            newUser.save((err,result)=>{
                if(err){
                    console.log("SIGNUP: Error in saving");
                    res.json({
                        status: "failed"
                    })
                }
                else{
                    res.json({
                        status: "success"
                    })
                }
            });
        }
    })
    
}

module.exports = signup_controller