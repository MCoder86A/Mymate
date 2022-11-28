const group = require("../../models/group")


const getgroup = async(req,res)=>{
    const groupdocs = await group.find({})

    const outGroup = []

    groupdocs.forEach((grp)=>{
        const Group = {}
        Group._id = grp._id
        Group.name = grp.name
        Group.description = grp.description
        Group.admin = grp.admin
        Group.memberCount = grp.member.length
        Group.amIPresent = grp.member.findIndex(
            (val) => val==req.user.userID
        )==-1?"no":"yes"
        Group.reqSent = grp.memberAddReq.findIndex(
            (val) => val==req.user.userID
        )==-1?"no":"yes"
        outGroup.push(Group)
    })

    res.send(outGroup)
}

module.exports = getgroup

// Description: Fetch all the group in the db
// Input: No input
// Output: Json