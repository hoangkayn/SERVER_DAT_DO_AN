var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));
app.listen(3000);

//mongoose 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://app_dat_do_an:UxzeCbSSGup7xZWf@cluster0.tjy7p.mongodb.net/dat_do_an_2022?retryWrites=true&w=majority', function(err){
    if(err){
        console.log("Mongodb connected error! " + err);
    }else{
        console.log("Mongodb connected successfully.");
    }
});
//body - parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",function(req,res){
    res.render("home")
})
app.get("/",function(req,res){
    res.render("home")
})

require("./routes/fileManager")(app);
require("./routes/account")(app);
require("./routes/city")(app)
require("./routes/category")(app)
require("./routes/post")(app)
require("./routes/token")(app)
