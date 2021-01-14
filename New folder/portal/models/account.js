const mongoose = require("mongoose");
const schema = mongoose.Schema;

const account_schema = new schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    dob:{
        type:Date,
        required: true
    },
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: true,
    },
    phone:{
        type:Number,
        required: true,
    }
}, {timestamps: true});
    

const account = mongoose.model("account", account_schema);

module.exports = account;