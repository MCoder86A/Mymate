const user = require("../../models/user")

const get_all_profile = async(req,res,userID)=>{
    const outDoc = []

    for(let id of userID){
        try {
            var userDoc = await user.find({
                _id:id
            })
    
        } catch (error) {
            
        }
        
        if(!userDoc){
            return res.send('invalid request')
        }

        outDoc.push({
            "_id": userDoc[0]._id,
            "username": userDoc[0].username,
            "name": userDoc[0].name
        })
    }
    return res.json(outDoc)
}

const profileinfo = async(req,res)=>{

    const userID = req.body.userID
    const options = req.body.option

    if(options=='large'){
        return await get_all_profile(req,res,userID)
    }

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
        "_id": userDoc[0]._id,
        "username": userDoc[0].username,
        "name": userDoc[0].name
    }

    res.json(outputDoc)

}


module.exports = profileinfo

// Description: Fetch a user info or a list of userinfo
//  depend upon the option { option: 'large' }
// Input: userID
// Output: Json