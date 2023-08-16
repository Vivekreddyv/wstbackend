const express=require('express')
const users = require('../models/userschema')
const router=express.Router()
const{body,validationResult}=require('express-validator')
const bcrypt=require('bcryptjs')


const validate=[
    body('name').trim().notEmpty().withMessage('enter valid name'),
    body('email').trim().isEmail().withMessage('enter valid email'),
    body('password').trim().isLength({min:6}).withMessage('enter valid password')
]

router.post('/signup',validate,async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})
    }
    const salt=await bcrypt.genSalt(10)
    const secpassword=await bcrypt.hash(req.body.password,salt)
    try {
        await users.create({
            name:req.body.name,
            email:req.body.email,
            password:secpassword
        })
        return res.json({success:true})
    } catch (error) {
        console.error(error.message)
        return res.json({success:false})
    }
})
module.exports=router