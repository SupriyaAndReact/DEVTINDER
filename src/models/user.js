const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : true,
        unique : true,
        minLength : 3,
        maxLength : 20
    },
    lastName : {
        type: String
    },
    age : {
        type : Number,
        min : 18
    },
    emailId : {
        type : String,
        lowercase : true,
        required : true,
        unique : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid email address:" +value)
            }
        }
    },
    password : {
        type : String
    },
    gender : {
        type : String,
        validate(value) {
            if(!["male", "female", "other"].includes(value))
                throw new Error("Gender data is not valid")
        }
    },
    about : {
        type: String,
        default : "This is a default about for the user"
    },
    skill : {
        type : [String]
    }
},
{
    timestamps : true
})

module.exports = mongoose.model("User", userSchema)