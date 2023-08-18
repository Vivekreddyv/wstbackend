const express=require('express')
const router=express.Router()


router.post('/productsdata',async(req,res)=>{
    try {
        await res.send([global.productsdata])
    } catch (error) {
        console.error(error.message)
        return res.json({success:false})
    }
})
module.exports=router