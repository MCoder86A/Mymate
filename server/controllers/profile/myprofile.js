const user = require("../../models/user")

const myprofile = async(req, res)=>{
    let userDoc = await user.findById(req.user.userID)

    let output = {}
    output._id = userDoc._id
    output.username = userDoc.username
    output.name = userDoc.name
    output.groupCount = userDoc.group.length

    res.json(output)
}

module.exports = myprofile

// Description: Generate details of the requesting user
// Input: No input | required signIn
// Output: json