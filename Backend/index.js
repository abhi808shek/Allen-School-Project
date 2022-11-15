const express = require("express");
const app = express()
const signup_router = require("./Router/signupRouter")
const login_router = require("./Router/loginRouter")
// const user_contact_router = require("./routers/Contact_Detail_Router")
const path = require("path")
const cors = require('cors')
// const verifyAccessToken = require('./middleware/verifyToken')
require("./Database/db")
// require('dotenv').config()


app.use(express.json())
app.use(cors());


const PORT = process.env.PORT || 8000;

app.get("/",()=>{console.log("Helllooo server");})

app.use("/",signup_router);
app.use("/",login_router);
// app.use("/",verifyAccessToken,user_contact_router);


app.listen(PORT,()=>{
    console.log("Server COnnected");
})