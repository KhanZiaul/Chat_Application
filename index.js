require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT

// Middleware
app.use(express.json())
app.use(cors())

// Mongoose connection

mongoose.connect(process.env.MONGODB_DRIVER)
.then(()=>{
    console.log("Mongoose connected successfully")
})
.catch((err)=>{
    console.log(err.message)
})


app.listen(port,()=>{
    console.log(`PORT is running in ${port}`)
})