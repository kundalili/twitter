const mongoose = require('mongoose')
const {Schema} = mongoose

// userScheme is an instance of class Schema
const messageSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    text: {
        type: String,
        required: true
    }
},
{ timestamps: true}) 

// in db the collection should be 'users'
module.exports = mongoose.model('Message', messageSchema)