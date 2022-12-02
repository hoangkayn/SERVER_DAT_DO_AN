
const mongoose = require("mongoose");

const cateSchema = new mongoose.Schema({
   Name:String,
   Image:String
});

module.exports = mongoose.model("Cate", cateSchema);