const mongoose=require('mongoose')
const {Schema}=mongoose

const productSchema=new Schema({
    imageurl:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('products',productSchema)