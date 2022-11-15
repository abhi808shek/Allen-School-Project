const match_login_data = require("../Controllers/LoginController")
const express = require("express")
const login_router = express.Router()


login_router.post("/login",match_login_data);


module.exports = login_router;