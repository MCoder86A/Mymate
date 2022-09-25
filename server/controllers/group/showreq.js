const { default: mongoose } = require('mongoose')
const group = require('../../models/group')
const user = require('../../models/user')

const showreq = async(req,res)=>{
    const output = {
        userID: []
    }
    
    const myDoc = await user.findById(req.user.userID)
    group.find({admin: myDoc._id},(err, result)=>{
        if(err){
            return res.send("internal error")
        }
        result.map((val,inx)=>{
            output.groupID = val._id
            output.userID.push(...val.memberAddReq)
        })

        return res.json(output)
    })

}

module.exports = showreq;

// Description: List all the add request
// Input: No input
// Output:  list of _id of the user and groupID