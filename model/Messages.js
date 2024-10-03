 
const mongoose = require("mongoose")
const MassagesSchema  = mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true,
    },
    massage:{
        type: String,
        required: true
    }

})
module.exports = mongoose.model("massages", MassagesSchema)