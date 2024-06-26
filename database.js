const mongoose = require('mongoose');
const mongodbURL = process.env.mongodbURI;

const mongodb = async () => {
    try {
        await mongoose.connect(mongodbURL);
        console.log('DB connected');
        
        const productsCollection = mongoose.connection.db.collection("products");

        const fetcheddata = await productsCollection.find({}).toArray();
        global.productsdata = fetcheddata;

        // Set up a change stream to listen for updates
        productsCollection.watch().on('change', async (change) => {
            if (change.operationType === 'insert' || change.operationType === 'update') {
                const updatedData = await productsCollection.find({}).toArray();
                global.productsdata = updatedData;
            }
        });
    } catch (error) {
        console.error('DB connection error:', error);
    }
};

module.exports = mongodb;
