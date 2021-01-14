const mongoose = require("mongoose");
const schema = mongoose.Schema;


const class_schema = new schema({
    Name:{type: String, required: true},
    Lecturer:{type: String, required: true},
    Room:{type: String, required: true},
    Code:{type:Number, required: true},
})

const class_info = mongoose.model("class_info", class_schema)

module.exports = class_info;