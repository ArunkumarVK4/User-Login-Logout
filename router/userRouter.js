const express = require("express")
const router = express.Router();
const userController = require("../controller/userContro")

const {register, Login, InsertEmployee} = userController

router.route("/register").post(register)
router.route("/login").post(Login)
router.route("/insert").post(InsertEmployee)

module.exports = router; 