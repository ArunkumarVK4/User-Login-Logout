const mongoose = require("mongoose");
const schema = mongoose.Schema

const UserSchema = new schema({
    firstName : {
        type: String,
        required: true
    },
    lastName : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
},{
    timestamps : true
})

module.exports = mongoose.model("UserRegister", UserSchema)