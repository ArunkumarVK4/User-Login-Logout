const mongoose = require("mongoose");

const schema = mongoose.Schema

const EmployeeSchema = new schema({
    email:{
        type: String,
        required: true
    }, 
    emp_name:{
        type: String,
        required: true
    },
    emp_id: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    role_id:{
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model("employeeDetails", EmployeeSchema)