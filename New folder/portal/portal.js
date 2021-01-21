const express = require('express')
const app = express();
const mongoose = require("mongoose")
const account = require("./models/account")
const class_info = require("./models/classes")
const validate = require("./static/validation")

app.set("view engine","ejs")
app.use(express.json())
app.use(express.static("static"))
app.use(express.urlencoded({ extended: false }))

const dblink = "mongodb+srv://rati:rati123456@portal.l4vej.mongodb.net/Portal?retryWrites=true&w=majority";

mongoose.connect(dblink, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {app.listen(3000)})
    .catch((err) => {console.log(err)});
    

app.get("/register", (req,res) => {
    res.render("register")
})

app.post("/register", (req, res) =>{
    
    var errors = validate(req.body)
    if (errors.email || errors.phone || errors.pw_strength=="Weak"){
        console.log("here")
        return res.status(422).json({
            errors: errors
        })
    }
    
    else{
        console.log("user created")
        var user = new account(req.body);
        user.save()
            .then((response) => {
                return res.status(200).json({
                    errors:errors
                })
            })
            .catch((err) => {console.log(err)})
    }
})

app.get("/", (req,res) => {
    res.render("login")
})

app.post("/", (req,res) => { 

    account.find()
        .then( result => {
            result.forEach((item) => {
                if (item.email == req.body.email && item.password == req.body.pw){
                    return res.status(200).send()
                }
            })
            return res.status(401).send()
        })
})

app.get("/portal", (req, res) =>{
    function add_class(acc){
        class_info.find()
            .then(result => {
                var class_list = []
                result.forEach(elem => {
                    if (acc.classes.includes(elem.Code)){
                        class_list.push(elem)
                    }
                })
                return res.render("portal", {class_list: class_list})
            })
    }
    // res.render("portal", {class_list: []})

    account.find()
        .then( result => {
            add_class(result[0])
        })

})

app.get("/portal/classes", (req, res) =>{
   
    class_info.find()
        .then((result) => { res.render("classes", {classes: result})} )
        .catch((err) =>{
            console.log(err);
        })
})

app.post("/portal/classes", (req, res) =>{ 
    var search_param = req.body.search_data
    var search_by = req.body.search_by
    
    class_info.find()
        .then( response => { 
            var result = []
            response.forEach(item => {
                if (search_by != "Credits"){
                    if ( item[search_by].toUpperCase() == search_param.toUpperCase() )
                        result.push(item)
                }
                else{
                    if ( item[search_by] == search_param ) 
                        result.push(item)
                }

            })
            return res.status(200).json({
                response: result,
            })
        // .catch( err => {console.log(err)}) MAYBE NOT NEEDED? MONGOOSE HAS NO CATCH() ?????
    })
})


app.post("/add_class", (req,res) => {
    account.find()
        .then( response => {
            response[0].classes.push(req.body.code)
            response[0].save();
        })
})