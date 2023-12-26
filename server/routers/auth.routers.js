
const Router = require('express')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const router = new Router()

router.post('/registration',
[
 check('email',"Uncorrect email").isLength({min:1 , max:12}),
 check('name',"Uncorrect name").isLength({min:3 , max:12})
 
],
    async  (req,res)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message:'Не корректный запрос' , errors})
        }
        const {email,name,cars} = req.body;
        console.log(name)
        const candidate = await User.findOne({email})
            if(candidate){
                return res.status(400).json({message:'Пользователь с номером '+ email +  ' уже существует'})
            }
            const user = new User({email,name,cars})
            await user.save()
            res.json({message:"Пользователь создан" + email + name })
            
    }catch(e){
        console.log(e)
        res.send({message:"Ошибка сервера"})
    }
})

router.post('/login',
    async  (req,res)=>{
    try{
        const {email,name} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"Пользователь не найден"})
        }
           const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn:"1h"})
           return res.json({
                token,
                user:{
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    cars: user.cars,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })
            
    }catch(e){
        console.log(e)
        res.send({message:"Ошибка сервера"})
    }
})


// router.post('/cars',
// async (req,res)=>{
//   try{
//     const {email,cars} = req.body
//     const user = await User.findOne({email})
//     if(!user){
//         return res.status(404).json({message:"MDAAAAAAAAAAA"})
//     }
//     return res.json({
//         user:{
//             cars:cars
//         }
//     })


//   }catch(e){
//     console.log(e)
//   }
// })


module.exports = router

