const Cate = require("../models/Cate")

module.exports = function(app){
    app.get("/category",function(req,res){
        res.render("admin_master",{content:"./category/category"})
    })
    app.post("/category/addNew",function(req,res){
var newCate = Cate({
    Name:req.body.Name,
    Image: req.body.Image
})
newCate.save(function(err){
    if(err){
        res.json({result:0,message:err})
    }
    else{
        
        res.json({result:1})
    }
})
    })
    app.post("/category",function(req,res){
        Cate.find(function(err,data){
            if(err){
                res.json({result:0,message:err})
            }else{
                res.json({result:1,List:data})
            }
        })
    })
    app.post("/category/update",function(req,res){
    Cate.findByIdAndUpdate(req.body.CateID,{Name:req.body.Name,Image:req.body.Image},function(err){
        if(err){
            console.log(err)
            res.json({result:0,message:err})
        }else{
            
            res.json({result:1})
        }
      })
    })
    app.post("/category/delete",function(req,res){
        Cate.findByIdAndDelete({_id:req.body.CateID},function(err){
if(err){
    res.json({result:0,message:err})
}else{
    res.json({result:1})
}
        })
    })
}