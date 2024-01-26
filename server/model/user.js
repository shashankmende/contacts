
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    number: Number
})

const userModel = mongoose.model("contact_numbers",userSchema)

module.exports = userModel