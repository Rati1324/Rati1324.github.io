const express = require('express')
const app = express();
const mongoose = require("mongoose")
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

app.post("/register", async (req, res) =>{
    console.log(req.body)
    var { email, password: plainTextPassword, confirm_password, dob, f_name, l_name, phone } = req.body;
    
    try{
        const response = await account.create({
            email,
            password,
            confirm_password,
            dob,
            f_name,
            l_name,
            phone
        })
        console.log("user created successfully: ", response)
    }
    catch(err){
        console.log(err)
        return res.json({ status: 'bad' })
    }
})

app.get("/", (req,res) => {
    res.render("login")
})

app.post("/", async (req,res) => {
    console.log(req.body)
    
})



