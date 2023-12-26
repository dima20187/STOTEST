

const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const app = express()
const PORT = config.get('serverPort')
const authRouter = require('./routers/auth.routers')

app.use(express.json())
app.use('/api/auth', authRouter)

const start = async ()=>{

    try{
        await mongoose.connect(config.get('Url'),{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        app.get('/',(req,res)=>{
            res.send('jgjgujgtjg')
        })

        app.listen(PORT,()=>{
            console.log('Server start,' +  PORT)
        })
    }catch(err){
       console.log("message" + err)

    }
}

start()