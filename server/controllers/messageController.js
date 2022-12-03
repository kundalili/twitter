const Message = require('../models/Message')

module.exports.list = async (req, res) => {

    try {
        console.log("🚀 ~ list here: ")

        const users = await Message.find()
        console.log("🚀 ~ users", users)
       
        res.send({success: true, users})
    } catch (error) {
        
        console.log("🚀 ~ Error in list users", error.message)
        res.send({success: false, error: error.message})

    }
}

module.exports.create = async (req, res) => {
    try {
        
        console.log("🚀 ~ register here: ", req.body)

        const {userId, text} = req.body;

        if (!userId || !text) {
            res.send({success: false, error: 'missing userId or text of message'})
            return
        }

        const messageCreated = await Message.create(req.body)
        console.log("🚀 ~ messageCreated", messageCreated)

        res.send({success: true})

    } catch (error) {
    
        console.log("🚀 ~ Error in register", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.findById = async (req, res) => {
    try {
        console.log("req params", req.params)
        if (!req.params.messageId) {
            throw new Error("No Message found for this id")
        }
        const message = await Message.findById(req.params.messageId)
        res.send({success: true, message})
    } catch (error) {
        console.log("🚀 ~ Error while finding Message", error.message)

        res.send({success: false, error: error.message})
    }
}