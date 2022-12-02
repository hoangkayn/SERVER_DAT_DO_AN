module.exports = function(app){
    app.get("/token",function(req,res){
        
        res.render("admin_master",{content:"./token/token"})
    })
}