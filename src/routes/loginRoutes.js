const express=require("express");
const loginrouter=express.Router();
const Userdata=require('../model/Userdata');
function lrouter(nav){

loginrouter.get('/',function(req,res){
    res.render("login",{
        nav,
        title:"Welcome to Central Library"
        
    });
})
    loginrouter.post('/add',function(req,res){
   
  
        Userdata.find({"user":req.body.user},(err,resp)=>{
           
            if(resp.length==0){
                res.render("errorsign",{
                    
                    title:"Welcome to Central Library",
                    message:"You are not a registered User.Please click SignUp page for registration"
                });
            }
            
            else{
                if(resp[0].password===req.body.password){
                    if(resp[0].user=="admin"){
                        res.redirect("/adminhome");
                    }
                    else{
                        res.redirect("/userhome");
                    }
                    
                }
                else{
                    res.render("errorsign",{
                        message:"User credentials do not match!!! Enter correct Password",
                        title:"Welcome to Central Library"
                        
                    });
                }
                
            }
    
        
        })
    
        })



return loginrouter;
}
module.exports=lrouter;