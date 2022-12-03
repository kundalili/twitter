const mongoose = require('mongoose')
const {Schema} = mongoose

// userScheme is an instance of class Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: String,
    lastName: String,
    bio: String,
    city: String,
    country: String,
    birthday: Date,
},
{ timestamps: true}) 

// in db the collection should be 'users'
module.exports = mongoose.model('User', userSchema)