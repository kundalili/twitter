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