const User = require('../models/User')

module.exports.list = async (req, res) => {

    try {
        console.log("🚀 ~ list here: ")

        const users = await User.find()
        console.log("🚀 ~ users", users)
       
        res.send({success: true, users})
    } catch (error) {
        
        console.log("🚀 ~ Error in list users", error.message)
        res.send({success: false, error: error.message})

    }
}

module.exports.register = async (req, res) => {
    try {
        
        console.log("🚀 ~ register here: ", req.body)

        const {email, username} = req.body;

        if (!email || !username) {
            res.send({success: false, error: 'validation failed'})
            return
        }

        const userCreated = await User.create(req.body)
        console.log("🚀 ~ userCreated", userCreated)

        res.send({success: true})

    } catch (error) {
    
        console.log("🚀 ~ Error in register", error.message)

        res.send({success: false, error: error.message})
        
    }
}

module.exports.findById = async (req, res) => {
    try {
        console.log("req params", req.params)
        if (!req.params.userId) {
            throw new Error("No User found for this id")
        }
        const user = await User.findById(req.params.userId)
        res.send({success: true, user})
    } catch (error) {
        console.log("🚀 ~ Error while finding User", error.message)

        res.send({success: false, error: error.message})
    }
}