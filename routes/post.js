const Post = require("../models/Post")

module.exports = function(app){

    app.get("/post",function(req,res){
        res.render("admin_master",{content:"./post/post"})
    })
    app.post("/post/add",function(req,res){
        var newPost = Post({
            TieuDe:req.body.TieuDe,
  Gia:req.body.Gia,
  Sdt:req.body.Sdt,
  Image:req.body.Image,
  TenNhom:req.body.TenNhom,
  TenCity:req.body.TenCity,
  Active:true,
  NgayDang:Date.now()
        })
        newPost.save(function(err){
            if(err){
                res.json({result:0,messErr:err})
            }
            else{
                res.json({result:1})
            }
    })
   
    })
    app.post("/post",function(req,res){
Post.find(function(err,data){
    if(err){
        res.json({result:0,errMsg:err})
    }
    else{
        res.json({result:1,post_List:data})
    }
})
    })
    app.post("/post/delete",function(req,res){
        Post.findByIdAndDelete({_id:req.body.ID_Post},function(err){
            if(err){
                res.json({result:0,errMsg:err})
            }else{
                res.json({result:1})
            }
        })
    })
}