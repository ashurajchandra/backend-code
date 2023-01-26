const User = require("../models/user")
const _ = require('lodash');
require("dotenv").config();
const jwt = require('jsonwebtoken');

module.exports.register = async(req,res)=>{
    try{
        const {email,password,confirmPassword} = req.body;


        if(_.isEmpty(email) || _.isEmpty(password) || _.isEmpty(confirmPassword)){
            return res.status(400).json({
                message:"please enter all the fields correctly"
            })

        }
         console.log("bodyb data", req.body)
        const checkUserExist =  await User.findOne({email});

        console.log("checkUserExist",checkUserExist)


        if(checkUserExist){
            return res.status(403).json({
                message:"user already exist please try to login"
            })
        }

        if(password !== confirmPassword){
            return res.status(401).json({
                message:"password and confirm password not matching"
            })
        }


      const registerUser = await User.create({email:email, password:password, confirmPassword:confirmPassword});
     if(!registerUser) {
        return res.status(500).json({
            message:"error in registering user",
            data:[]
        })
     }
      return res.status(200).json({
        message:"user registered succesfully",
        data:registerUser
      })
      





    }catch(error){
        if(error)console.log(error)
        return res.status(500).json({
            message:"error in registering user"
        })
    }
}


module.exports.login = async(req,res)=>{
    try{
     const {email, password} = req.body;

     const user = await User.findOne({email:email});

     if(!user){
        return res.status(404).json({
            message:"user does not exist please signup",
            data:[]
        })
     }

     const token = jwt.sign({
        email:user.email,
        userId: user._id,
        // isAdmin: user.isAdmin
     },process.env.JWT_SECRET_KEY)

     return res.status(200).json({
        message:"user login ",
        data: token
     })
        

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"error in login user"
        })
    }
}
