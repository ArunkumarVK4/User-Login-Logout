const express = require("express")
const router = express.Router();
const userController = require("../controller/userContro");
const {verifyToken} = require("../verifyToken")

const {register, Login, InsertEmployee, GetUser} = userController

router.route("/register").post(register)
router.route("/login").post(Login)
router.route("/insert").post(InsertEmployee);
router.post("/getUser",verifyToken, GetUser)

module.exports = router; 