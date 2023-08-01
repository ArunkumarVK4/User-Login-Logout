const User = require("../models/userModel");
const Employee = require("../models/employeeModel");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

// Register
exports.register = async (req, res) => {
  const { firstname, lastName, email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    res.status(400).json({
      message: "User Already Exist Please Login",
    });
  } else {
    let password = req.body.password;
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        password = hash;
        // console.log(password);
        const userData = new User({
          firstName: firstname,
          lastName: lastName,
          email,
          password,
        });

        userData
          .save()
          .then((user) => {
            res.status(200).json({
              message: "User Added Successfully",
              data: user,
            });
          })
          .catch((err) => {
            res.status(400).json({
              error: err,
            });
          });
      });
    });
  }
};

// Login
exports.Login = async (req, res) => {
  const { email, password } = req.body;

  const userData = await User.findOne({ email });
  if (!userData) {
    res.status(400).json({
      message: "User not Found Please Register",
    });
  } else {
    bcrypt.compare(password, userData.password, function (err, result) {
      result == true;

      if (!result) {
        res.status(400).json({
          message: "Please Enter Correct Password",
        });
      } else {
        var token = jwt.sign({ user: userData }, process.env.SECRET_KEY);
        res.status(200).json({
          message: "Login Successful",
          token,
        });
      }
    });
  }
};

//Insert Employee
exports.InsertEmployee = async (req,res)=>{
  const email = req.body.email;

  const RegisteredUser = await User.findOne({email})

  if(!RegisteredUser){
    res.status(400).json({
      message: "Employee Not Found Please Contact Admin"
    })
  }else{
    const {email, emp_name, emp_id, role, role_id} = req.body;
    const addEmp = new Employee({
        email,
        emp_id,
        emp_name,
        role_id,
        role
    })
    addEmp.save().then(data=>{
      res.status(200).json({
        message: "Employee Inserted Successfully",
        Details: data
      })
    }).catch(err=>{res.status(400).json({
      error: err
    })})
  }
}