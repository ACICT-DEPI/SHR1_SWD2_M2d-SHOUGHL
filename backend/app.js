const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const usersPath = require('./routes/userRoute')
const servicesPath = require('./routes/servicesRoute');
const cors = require('cors')
const cookieParser = require('cookie-parser')

dotenv.config()





app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('view engine','ejs')
app.use(cors())
app.use(cookieParser())

mongoose.
        connect(process.env.MONGO_URL)
        .then(()=> {
            console.log('connection successful');
})


app.use('/api/users', usersPath);
app.use('/api/services', servicesPath);


app.listen(process.env.PORT, ()=> {
    console.log(`server is running at ${process.env.PORT}`)
})