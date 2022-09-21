const group = require('../../models/group')
const user = require('../../models/user')

const fetch = async(req, res)=>{

    var groups = []
    const userDoc = await user.findById(req.user.userID)
    await new Promise((resolve, reject)=>{
        if(userDoc.group.length==0)resolve()
        
        userDoc.group.map(async(value, index)=>{
            let groupDoc = await group.findById(value)

            let groupInfo = {}
            groupInfo._id = groupDoc._id
            groupInfo.name = groupDoc.name
            groupInfo.admin = groupDoc.admin
            groupInfo.createdAt = groupDoc.createdAt
            groupInfo.memberCount = groupDoc.member.length

            groups.push(groupInfo)

            if(index==userDoc.group.length-1){
                resolve()
            }
        })
    })
    
    return res.json(groups)
}

module.exports = fetch

// Description: Fetch all the group which are being joined by the user
// Input: No input
// Output: Json