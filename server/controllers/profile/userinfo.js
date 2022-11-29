const user = require("../../models/user")

const profileinfo = async(req,res)=>{

    const userID = req.body.userID

    try {
        var userDoc = await user.find({
            _id:userID
        })

    } catch (error) {
        
    }
    
    if(!userDoc){
        res.send('invalid request')
    }

    const outputDoc = {
        "username": userDoc[0].username,
        "name": userDoc[0].name
    }

    res.json(outputDoc)

}


module.exports = profileinfo

// Description: Fetch a user info
// Input: userID
// Output: Json