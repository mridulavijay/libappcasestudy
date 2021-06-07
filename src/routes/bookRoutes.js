const express=require("express");
const booksrouter=express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav){

    booksrouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:"Library",
                books
            });
        });
        
    });
    
    booksrouter.get('/:id',(req,res)=>{
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",{
                nav,
                title:"Library",
                book
        });
        });
       
    });
return booksrouter;
}
module.exports=router;