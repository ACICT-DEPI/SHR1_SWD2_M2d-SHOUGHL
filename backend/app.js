const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const usersPath = require('./routes/userRoute')
const cors = require('cors')
dotenv.config()





app.use(express.json())
app.use(cors())

mongoose.
        connect(process.env.MONGO_URL)
        .then(()=> {
            console.log('connection successful');
})


app.use('/api/users', usersPath)


app.listen(process.env.PORT, ()=> {
    console.log(`server is running at ${process.env.PORT}`)
})