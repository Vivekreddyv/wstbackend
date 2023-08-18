const express=require('express')
const app=express()
const PORT=5000
const cors=require('cors')
const mongodb=require('./database.js')
mongodb()

app.get('/',(req,res)=>{
    res.send('hii')
})
app.use(cors())
app.use(express.json())
app.use('/api',require('./routes/signup.js'))
app.use('/api',require('./routes/login.js'))
app.use('/api',require('./routes/productsadd.js'))

app.listen(PORT,()=>{
    console.log(`server is listening to ${PORT}`)
})