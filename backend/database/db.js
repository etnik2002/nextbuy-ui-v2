require('dotenv').config()
const mongoose=require("mongoose")

exports.connectToDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://etnikz2002:Etnik002@cluster0.ka6ybat.mongodb.net/")
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}