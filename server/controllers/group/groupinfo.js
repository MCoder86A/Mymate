const group = require("../../models/group")

const groupinfo = async(req,res)=>{
    const groupID = req.body.groupID
    const options = req.body.option //option: short/large
    
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
        memberCount: groupDoc[0].member.length,
        created: groupDoc[0].createdAt
    }
    if(options && options==='large'){
        outputDoc.member = groupDoc[0].member
    }

    res.json(outputDoc)

}

module.exports = groupinfo

// Description: Fetch a group info
// Input: groupID / groupID and option
// Output: Json