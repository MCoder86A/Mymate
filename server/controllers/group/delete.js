const group = require('../../models/group')
const user = require('../../models/user')


const del = async(req, res)=>{
    const groupID = req.body.groupID
    try {
        var groupDoc = await group.findById(groupID)
        if(!groupDoc) return res.status(401).send("Invalid groupID")
    } 
    catch (error) {
        console.log(error)
        return res.status(401).send("Internal error on group search")
    }

    const groupAdmin = groupDoc.admin.toString()

    if(groupAdmin!=req.user.userID){
        return res.status(401).send("only admin can delete")
    }

    group.findByIdAndDelete(groupID, (err)=>{
        if(err){
            return res.send("Internal error on group delete")
        }
    })
    try {
        const userDoc = await user.findById(req.user.userID)
        const index = userDoc.group.indexOf(groupID)
        userDoc.group.splice(index, 1)
        await userDoc.save()
        return res.send("success")
    } catch (error) {
        console.log(error)
    }
}

module.exports = del