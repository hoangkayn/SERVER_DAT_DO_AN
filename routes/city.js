const City = require("../models/City");


module.exports = function(app){
    app.get("/city",function(req,res){
        res.render("admin_master",{content: "./city/city"})
    })
    
    app.post("/city/add",function(req,res){
var newCity =  City({
    Name: req.body.Name
})

newCity.save(function(err){
    if(err){
        res.json({result:0,errMsg:err})
    }else{
        res.json({result:1})
    }
})
    })
    
    app.post("/city",function(req,res){
        City.find(function(err,data){
            if(err){
                res.json({result:0,errMsg:err})
            }
            else{
                res.json({result:1,List:data})
            }
        })
    })
    app.post("/city/update", function(req, res){
        
        City.findByIdAndUpdate(req.body.CityID, {Name: req.body.Name}, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
            
        });
    });

    app.post("/city/delete", function(req, res){
        City.findByIdAndDelete(req.body.CityID, function(err){
            if(err){
                res.json({kq:0, errMsg:err});
            }else{
                res.json({kq:1});
            }
        })
    });

}
