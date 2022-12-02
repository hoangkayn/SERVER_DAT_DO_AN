
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  TieuDe:String,
  Gia:String,
  Sdt:String,
  Image:String,
  TenNhom:mongoose.SchemaTypes.ObjectId,
  TenCity:mongoose.SchemaTypes.ObjectId,
  Active:Boolean,
  NgayDang:Date
});

module.exports = mongoose.model("Post", postSchema);