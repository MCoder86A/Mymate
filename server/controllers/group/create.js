const { mongoose, model, Model } = require('mongoose')
const group = require('../../models/group')
const user = require('../../models/user')


const create = async(req, res)=>{
    groupName = req.body.name
    if(!groupName)return res.send("group name required")
    groupDesc = req.body.desc

    const newGroup = new group({
        name: groupName,
        description: groupDesc,
        admin: new mongoose.Types.ObjectId(req.user.userID)
    })
    newGroup.member.push(new mongoose.Types.ObjectId(req.user.userID))
    newGroup.save((err, result)=>{
        if(err){
            return res.send("Internal error")
        }
    })
    const userDoc = await user.findById(req.user.userID)
    userDoc.group.push(newGroup._id)
    await userDoc.save();

    return res.status(201).send("success")
}

module.exports = create