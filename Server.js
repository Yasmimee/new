const express=require('express')


const  ConnectDB= require('./config/connectDB');
const  ContactRoute  = require('./Routes/contact');
const lostRouter=require('./Routes/lost')
const post = require('./Routes/forum')

require ('dotenv').config()

const app=express()


const port=5000




ConnectDB()
app.use(express.json())
app.use('/api/contacts', ContactRoute)
app.use('/api/lost', lostRouter)
app.use('/api/post', post)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})