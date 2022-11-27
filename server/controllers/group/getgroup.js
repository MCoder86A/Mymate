const group = require("../../models/group")


const getgroup = async(req,res)=>{
    const groupdocs = await group.find({})

    const outGroup = []

    groupdocs.forEach((grp)=>{
        const Group = {}
        Group._id = grp._id
        Group.name = grp.name
        Group.admin = grp.admin
        Group.memberCount = grp.member.length
        outGroup.push(Group)
    })

    res.send(outGroup)
}

module.exports = getgroup

// Description: Fetch all the group in the db
// Input: No input
// Output: Json