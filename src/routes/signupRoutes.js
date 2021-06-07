const express=require("express");
const signuprouter=express.Router();
const Userdata=require('../model/Userdata');
function srouter(nav){

signuprouter.get('/',function(req,res){
    res.render("signup",{
        nav,
        title:"Welcome to Central Library"
        
    });
});
signuprouter.post('/add',function(req,res){
   
  
    Userdata.find({"user":req.body.user},(err,resp)=>{
        if(resp.length==0){
            if(req.body.user=="admin")
            var item={
                user:req.body.user,
                password:req.body.password,
               email:req.body.email,
                userCategory:"admin"
            }
            else{
                var item={
                    user:req.body.user,
                    password:req.body.password,
                   email:req.body.email,
                    userCategory:"normaluser"
                }
            }
            var User=Userdata(item);
            User.save();
            res.redirect("/login");
            
        }
        else{
            res.render("errorsign",{
                
                title:"Welcome to Central Library",
                message:"Username is already registered.Please signup using different username"
            });
            
        }

    
    })

    })
    

return signuprouter;
}
module.exports=srouter;