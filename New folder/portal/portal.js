const express = require('express')
const app = express();
const mongoose = require("mongoose")
const mor = require("morgan")
const reg_route = require('./routes/page_routes')
const account = require("./models/account")
const validate = require("./scripts/validation")

app.set("view engine","ejs")
app.use(express.json())
app.use(express.static("static"))
app.use(express.urlencoded({ extended: false }))

const dblink = "mongodb+srv://rati:rati123456@portal.l4vej.mongodb.net/Portal?retryWrites=true&w=majority";

mongoose.connect(dblink, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {app.listen(3000)})
    .catch((err) => {console.log(err)});
    

app.get("/register", (req,res) => {
    res.render("register", {msg: 0})
})

app.post("/register", (req, res) =>{
    
})

app.get("/", (req,res) => {
    res.render("login")
})



