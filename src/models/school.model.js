import mongoose from "mongoose"


const schoolSchema= new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   address:{
    type:String,
    required:true
   },
   latitude:{
    type:String,
    required:true
   },
   longitude:{
    type:String,
    required:true
   }
   
},{timestamps:true})

export const School = mongoose.model('School',schoolSchema)