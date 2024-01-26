const express = require("express")

const app = express()

const mongoose = require('mongoose')
const cors = require("cors")
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/personal_data')

const userModel = require('./model/user')

app.get('/getUser',(req,res)=>{
    userModel.find()
    .then(user => res.json(user))
    .then(result=>console.log("resutl",result))
    .catch(e=>res.json(e))
})


app.listen(5001,()=>{
    console.log("server is started")
})