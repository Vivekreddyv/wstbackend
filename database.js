const mongoose=require('mongoose')
const mongodbURL="mongodb+srv://WingSpanTrade:WingSpanTrade8797@cluster0.isrvdlj.mongodb.net/WingSpanTrade?retryWrites=true&w=majority"


const mongodb=async()=>{
    await mongoose.connect(mongodbURL)
    console.log('db connected')
}
module.exports=mongodb