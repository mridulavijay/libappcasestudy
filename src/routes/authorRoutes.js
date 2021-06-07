const express=require("express");
const authorsrouter=express.Router();
const Authordata=require("../model/Authordata");
function arouter(nav){

authorsrouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){
        res.render("authors",{
            nav,
            title:"Welcome to Central Library",
            authors
        });
    })
    
});

authorsrouter.get('/:id',(req,res)=>{
    const id=req.params.id;
    Authordata.findOne({_id:id})
    .then(function(author){
        res.render("author",{
            nav,
            title:"Welcome to Central Library",
            author
        });
    })
});
return authorsrouter;
}
module.exports=arouter;