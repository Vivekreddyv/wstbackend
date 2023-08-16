const express=require('express')
const users = require('../models/userschema')
const{body,validationResult}=require('express-validator')
const router=express.Router()
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtsecret="puBKVN3j4PV8OEsOsvXbMEKDCtG0ALIG"
const validate=[
    body('email').trim().isEmail().withMessage('enter valid email'),
]
router.post('/login',validate,async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})
    }
    const useremail=req.body.email
    try {
        const loginuser= await users.findOne({email:useremail})
        if(!loginuser){
            return res.json({message:'user not found'})
        }
        const comparepassword=await bcrypt.compare(req.body.password,loginuser.password)
        if(!comparepassword){
            return res.json({message:'enter valid password'})
        }
       const data={
        user:{
            id:loginuser.id
        }
       }
       const authtoken=await jwt.sign(data,jwtsecret)
        return res.json({success:true,authtoken:authtoken})
    } catch (error) {
        console.error(error.message)
    }
})
module.exports=router