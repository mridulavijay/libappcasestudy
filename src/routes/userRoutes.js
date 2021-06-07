const express=require("express");
const Authordata=require("../model/Authordata");
const userrouter=express.Router();
userrouter.use(express.static('./public'));
const Bookdata=require('../model/Bookdata');
function router(nav){
    userrouter.get('/',function(req,res){
        //res.sendFile(__dirname+"/src/views/index.html");
        res.render("userhome",{
            nav,
            title:"Welcome User to Central Library"
        });
    });
    userrouter.get('/books',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:"Library",
                books
            });
        });
        
    });
    
    userrouter.get('/books/:id',(req,res)=>{
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
    userrouter.get('/authors',function(req,res){
        Authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:"Welcome to Central Library",
                authors
            });
        })
        
    });
    
    userrouter.get('/authors/:id',(req,res)=>{
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
return userrouter;
}
module.exports=router;