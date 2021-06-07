const express=require("express");
const Authordata=require("../model/Authordata");
const adminrouter=express.Router();
const multer=require('multer');


adminrouter.use(express.static('./public'));

const Bookdata=require('../model/Bookdata');

function router(nav,storage){
    adminrouter.get('/',function(req,res){
        //res.sendFile(__dirname+"/src/views/index.html");
        res.render("adminhome",{
            nav,
            title:"Welcome Admin to Central Library"
        });
    });
    adminrouter.get('/adbooks',function(req,res){
        //res.sendFile(__dirname+"/src/views/index.html");
        Bookdata.find()
        .then(function(books){
            res.render("adbooks",{
                nav,
                title:"Welcome Admin to Central Library",
                books
            });
        });
    });
    adminrouter.get('/adbooks/:id',(req,res)=>{
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("book",{
                nav,
                title:"Welcome Admin to Central Library",
                book
        });
        });
       
    });
    adminrouter.get('/adauthors',function(req,res){
        //res.sendFile(__dirname+"/src/views/index.html");
        Authordata.find()
        .then(function(authors){
            res.render("adauthors",{
                nav,
                title:"Welcome to Central Library",
                authors
            });
        })
        
    });
    adminrouter.get('/adauthors/:id',(req,res)=>{
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
    adminrouter.get('/addbook',function(req,res){
        res.render("addbook",{
            nav,
            title:"Welcome to Central Library"
            
        });
        
    });
    
    adminrouter.post('/addbook/add',(req,res)=>{
       
       
        let upload = multer({ storage: storage}).single('image');
        
        upload(req, res, function(err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
    
            
            if (!req.file) {
                
                console.log('Please select an image to upload');
            }
            else if(err){
                console.log(err);
            } 
            else{
                var item={
                    title:req.body.btitle,
                    author:req.body.bauthor,
                    genre:req.body.bgenre,
                    image:req.file.filename,
                    desc:req.body.bdesc
                }
                var Book=Bookdata(item);
                Book.save();
            }
        });
        
        
        
        res.redirect("/adminhome/adbooks");
       
     })
     
     adminrouter.get('/adbooks/bupdate/:id',(req,res)=>{
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("bupdate",{
                nav,
                title:"Welcome to Central Library",
                bid:id,
                btitle:book.title,
                bgenre:book.genre,
                bauthor:book.author,
                
                bdesc:book.desc
            });
        })
    })

    adminrouter.post('/adbooks/bupdate',(req,res)=>{
       
      
       let upload = multer({ storage: storage}).single('image');
        upload(req, res, function(err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
            if (!req.file) {
                
                console.log('Please select an image to upload');
            }
            else if(err){
                console.log(err);
            } 
            else{
                 const id=req.body.bid;
                 var data={
                    title:req.body.btitle,
                    author:req.body.bauthor,
                    genre:req.body.bgenre,
                    image:req.file.filename,
                      desc:req.body.bdesc
                }
               Bookdata.findByIdAndUpdate(id,data,function(err,docs){
                      if(err){
               
                       console.log("Nomatch");
                         }
                      else{
               
                           console.log("yes");
                         }
        
                     });
                  }
         });
       res.redirect("/adminhome/adbooks");

    })
    adminrouter.get('/adauthors/aupdate/:id',(req,res)=>{
        const id=req.params.id;
        Authordata.findOne({_id:id})
         .then(function(author){
             
            res.render("aupdate",{
                nav,
                title:"Welcome to Central Library",
                aid:id,
                aname:author.author,
                abook:author.book,
                agenre:author.genre,
                adesc:author.desc
            });
        })
    })

    adminrouter.post('/adauthors/aupdate',(req,res)=>{
       
       let upload = multer({ storage: storage}).single('aimage');
        upload(req, res, function(err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
    
            
            if (!req.file) {
                console.log('Please select an image to upload');
            }
            else if(err){
                console.log(err);
            } 
       else{
       const id=req.body.aid;
       var data={
        author:req.body.aname,
        book:req.body.abook,
        genre:req.body.agenre,
        image:req.file.filename,
          desc:req.body.adesc
    }
       Authordata.findByIdAndUpdate(id,data,function(err,docs){
           if(err){
               
               console.log("Nomatch");
           }
           else{
               
               console.log("yes");
           }
       });
    }
});
       res.redirect("/adminhome/adauthors");

    })
    adminrouter.get('/adbooks/delete/:id',(req,res)=>{
        const id=req.params.id;
       Bookdata.findByIdAndDelete(id,function(err,docs){
          if(err){
              console.log(err);
          }
          else{
              console.log("yes");
          }
       })
           res.redirect('/adminhome/adbooks');
        })
        adminrouter.get('/adauthors/delete/:id',(req,res)=>{
            const id=req.params.id;
           Authordata.findByIdAndDelete(id,function(err,docs){
              if(err){
                  console.log(err);
              }
              else{
                  console.log("yes");
              }
           })
               res.redirect('/adminhome/adauthors');
            })
     adminrouter.get('/addauthor',function(req,res){
        res.render("addauthor",{
            nav,
            title:"Welcome to Central Library"
            
        });
    });
    adminrouter.post('/addauthor/add',(req,res)=>{
       
        let upload = multer({ storage: storage}).single('aimage');
        upload(req, res, function(err) {
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
    
            
            if (!req.file) {
                console.log('Please select an image to upload');
            }
            else if(err){
                console.log(err);
            }
            else{
                var item={
                    author:req.body.aname,
                    book:req.body.abook,
                    genre:req.body.agenre,
                    image:req.file.filename,
                    desc:req.body.adesc
                }
                var Author=Authordata(item);
               Author.save();
            } 
        });
        
        res.redirect("/adminhome/adauthors");
       
     })
return adminrouter;
}
module.exports=router;