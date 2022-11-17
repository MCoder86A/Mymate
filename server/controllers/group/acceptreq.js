const { default: mongoose } = require('mongoose')
const group = require('../../models/group')

const acceptreq = async(req,res)=>{
    const userID = req.body.userID
    const groupID = req.body.groupID

    let groupDoc = await group.find({
        _id:groupID,
        admin:req.user.userID,
        memberAddReq:{_id:userID}
    }).exec()
    
    if(groupDoc.length==0){
        return res.status(403).send("Not found any group")
    }

    const targetGroup = await group.findById(groupID)
    let inx=targetGroup.memberAddReq.indexOf(userID)
    targetGroup.member.push(userID)
    targetGroup.memberAddReq.splice(inx,1)
    
    targetGroup.save((err)=>{
        if(err){
            res.send("Error")
        }
        res.send("Accepted")
    })
    
    
}


module.exports = acceptreq


// Description: accept request to join in a group
// Input: userID, groupID
// Output: message