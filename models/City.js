
const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
   Name:String
});

module.exports = mongoose.model("City", citySchema);