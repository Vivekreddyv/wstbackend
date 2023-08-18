const mongoose = require('mongoose');
const mongodbURL = "mongodb+srv://WingSpanTrade:WingSpanTrade8797@cluster0.isrvdlj.mongodb.net/WingSpanTrade?retryWrites=true&w=majority";

const mongodb = async () => {
    try {
        await mongoose.connect(mongodbURL);
        console.log('DB connected');
        
        const fetcheddata = await mongoose.connection.db.collection("products").find({}).toArray();
        global.productsdata = fetcheddata;
    } catch (error) {
        console.error('DB connection error:', error);
    }
};

module.exports = mongodb;
