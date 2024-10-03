const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const MassagesSchema =require("./model/Messages")
// Connect to MongoDb And Server
mongoose.connect("mongodb://localhost:27017/Protfoio").then(()=>{
    console.log("Connected Has Been Successfully")
}).catch((err)=>{
    console.log(err)
})
// ----------------------------------------------------------------
// API That create data in mongodb
app.post("/Create/massages", async (req,res)=>{
    const newMassage =MassagesSchema(req.body)
    const SaveMassages = await newMassage.save()
    if (SaveMassages){
        res.send("Success")
    }
})



// Server Running with Port Number
app.listen(1000, (req,res)=>{
    console.log("Server Is Running SucccessFully 1000 Port Number")
})