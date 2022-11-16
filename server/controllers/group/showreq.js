const { default: mongoose } = require('mongoose')
const group = require('../../models/group')
const user = require('../../models/user')

const showreq = async(req,res)=>{
    const output = {
        request:[]
    }
    
    group.find({admin: req.user.userID},(err, result)=>{
        if(err){
            return res.send("internal error")
        }
        result.map((val)=>{
            output.request.push({
                groupID:val._id,
                member_list:val.memberAddReq
            })
        })

        return res.json(output)
    })

}

module.exports = showreq;

// Description: List all the add request
// Input: No input
// Output:  list of _id of the user and groupID