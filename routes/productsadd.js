const express = require('express')
const router = express.Router()
const productSchema = require('../models/productaddschema')

router.post('/sellers', async (req, res) => {
    try {
        const { title, description, price, imageurl, city, name } = req.body
        await productSchema.create({
            title: title,
            description: description,
            price: price,
            imageurl: imageurl,
            city: city,
            name: name,
        })
        return res.json({ success: true })
    } catch (error) {
        console.error(error.message)
        return res.json({ success: false })
    }

})
module.exports=router