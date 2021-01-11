const express = require('express')
const app = express();
const mongoose = require("mongoose")
const account = require("./models/account")
// const validate = require("./scripts/validation")

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

app.post("/register", async (req, res) =>{
    // var errors = validate(req.body)
    if (errors.email.length>0 || errors.phone.length>0 || 
        (errors.password.length>0) && errors.password[0].split(" ")[2] == "weak") 
            res.render("register", {msg:errors})
    else {
        // save the user 
        var user = new account(req.body);
        user.save()
        .then((result) => res.redirect('/'))
        .catch((err) => console.log(err))
    }
})

app.get("/", (req,res) => {
    res.render("login")
})

app.post("/", async (req,res) => {
    console.log(req.body)
    
})



