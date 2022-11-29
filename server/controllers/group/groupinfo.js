const group = require("../../models/group")

const groupinfo = async(req,res)=>{
    const groupID = req.body.groupID
    try {
        var groupDoc = await group.find({
            _id:groupID
        })
        
    } catch (error) {
        
    }
    
    if(!groupDoc){
        res.send('invalid request')
    }

    const outputDoc = {
        name: groupDoc[0].name,
        description: groupDoc[0].description,
        admin: groupDoc[0].admin,
        memberCount: groupDoc[0].member.length
    }

    res.json(outputDoc)

}

module.exports = groupinfo

// Description: Fetch a group info
// Input: groupID
// Output: Json