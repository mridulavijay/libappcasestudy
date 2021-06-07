const express=require("express");
const addbookrouter=express.Router();
const Bookdata=require('../model/Bookdata');
function abrouter(nav){

addbookrouter.get('/',function(req,res){
    res.render("addbook",{
        nav,
        title:"Welcome to Central Library"
        
    });
});
addbookrouter.post('/add',(req,res)=>{
    var item={
        title:req.body.btitle,
        author:req.body.bauthor,
        genre:req.body.bgenre,
        image:req.body.image,
        desc:req.body.bdesc
    }
    var Book=Bookdata(item);
    Book.save();
    res.redirect("/books");
   
 })
 

return addbookrouter;
}
module.exports=abrouter;



