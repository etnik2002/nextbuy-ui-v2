const mongoose=require("mongoose")
const {Schema}=mongoose

const userSchema=new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    isVerified:{
        type:Boolean,
    },
    isAdmin:{
        type:Boolean,
    }
})

module.exports=mongoose.model("User",userSchema)