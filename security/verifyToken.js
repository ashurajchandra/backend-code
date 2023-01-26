const jwt = require('jsonwebtoken');
require('dotenv').config();



module.exports.verifyToken = (req,res,next)=>{

    try{

        const token = req.headers.authorization;
        console.log("token",token);

        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("payaload",payload)
        req.body.userId = payload.userId

        next()

    }catch(error){
        return res.staus(500).json({
            message:"invalid token",
            data:[]
        })
    }
}




