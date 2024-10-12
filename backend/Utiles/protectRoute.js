const jwt = require('jsonwebtoken')
const User = require('../models/User')

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token){
            return res.status(401).json({error: 'no token provided'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
    if(!decoded){
        return res.status(401).json({error: 'invalid token'})
    }
    const user = await User.findById(decoded.id)
    if(!user){
        return res.status(401).json({error: 'user not found from middleware'})
    }

    req.user = user
    next()
    } catch (error) {
        return res.status(401).json( error )
    }
}
module.exports = protectRoute