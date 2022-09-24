const { default: mongoose } = require('mongoose')
const group = require('../../models/group')
const user = require('../../models/user')

const addme = async(req,res)=>{
    const groupID = req.body.groupID

    const targetGroupDoc = await group.findById(groupID)
    if(!targetGroupDoc){
        return res.send("no group with id: "+groupID)
    }

    const adminDoc = await user.findById(targetGroupDoc.admin);
    if(!adminDoc){
        return res.send("internal error")
    }
    const userobjID = new mongoose.Types.ObjectId(req.user.userID)
    
    for(let val of targetGroupDoc.member){
        if(val.toString()==req.user.userID){
            return res.send("already a member")
        }
    }

    for(let val of targetGroupDoc.memberAddReq){
        if(val.toString()==req.user.userID){
            return res.send("already reqest sent")
        }
    }
    
    targetGroupDoc.memberAddReq.push(userobjID)
    targetGroupDoc.save((err,result)=>{
        if(err){
            return res.send("request not sent")
        }
        return res.send("request sent")
    })

}

module.exports = addme;

// Description: request the admin to add user for joining the group
// Input: groupID
// Output: message