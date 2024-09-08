import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String 
    },
    username : {
        type : String ,
        required : true,

    },
    email : {
        type : String ,
        required : true,

    },
    password : {
        type : String ,
        required : true, 
    },
})

const user = mongoose.model('users' , userSchema)
export {user}