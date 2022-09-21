const jwt = require('jsonwebtoken')


const checkAuth = (req, res, next)=>{

    token = req.body.token || req.headers["x-access-token"]
    if(!token){
        return res.status(403).send("Token is needed")
    }

    try {
        jwt.verify(token, process.env.SECRET,(err, payload)=>{
            if(payload){   
                req.user = payload
                return next()
            }
            else{
                return res.status(403).send("Access denied")
            }
        })
        
    } catch (error) {
        return res.status(401).send("Invalid token")
    }
}


module.exports = checkAuth