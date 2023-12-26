const {Schema, model, ObjectId} = require('mongoose')


const User = new Schema({
    email: {type: String, required: true, unique: true},
    name: {type: String, required:true},
    cars:{type: Array},
    diskSpace: {type: Number, default: 1024**3*10},
    usedSpace: {type: Number, default: 0},
   
}) 
module.exports = model('User', User)