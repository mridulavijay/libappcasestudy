const express=require("express");
const addauthorrouter=express.Router();
const Authordata=require('../model/Authordata');
function aarouter(nav){

addauthorrouter.get('/',function(req,res){
    res.render("addauthor",{
        nav,
        title:"Welcome to Central Library"
        
    });
});
addauthorrouter.post('/add',(req,res)=>{
    var item={
        author:req.body.aname,
        book:req.body.abook,
        genre:req.body.agenre,
        image:req.body.aimage,
        desc:req.body.adesc
    }
    var Author=Authordata(item);
    Author.save();
    res.redirect("/authors");
   
 })
 

return addauthorrouter;
}
module.exports=aarouter;