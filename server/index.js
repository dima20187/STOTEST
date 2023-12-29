
const {Schema, model, ObjectId} = require('mongoose')
const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const app = express()
const PORT = config.get('serverPort')
const authRouter = require('./routers/auth.routers')
const User = require('./models/User')
const cors = require('cors')
app.use(express.json())
app.use('/api/auth', authRouter)
app.use(cors())
const start = async ()=>{    

    try{
        await mongoose.connect(config.get('Url'),{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            
        })
        const users = await User.find({})
        console.log(users)

        app.get('/logn',(req,res)=>{
            res.json(users)
        })

        app.listen(PORT,()=>{
            console.log('Server start,' +  PORT)
        })
    }catch(err){
       console.log("message" + err)

    }
}

start()