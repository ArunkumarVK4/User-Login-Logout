const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require("./dbConfig");
const userRouter = require("./router/userRouter")
app.use(cors())

app.use(express.json())


app.use("/user",userRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Port running in ${process.env.PORT}`);
}) 