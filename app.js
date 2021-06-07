const express=require("express");
const app=express();
const multer=require('multer');
const path=require('path');
app.set('view engine','ejs');
app.set('views',__dirname+"/src/views");
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
const PORT=process.env.PORT||5000;
const storage = multer.diskStorage({
    
    destination : function(req, file, cb) {
        cb(null, __dirname+'/public/images');},
       

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
        
}
    
    
}) ;  


const nav=[
    {link:"/login",name:"Login"},
    {link:"/signup",name:"SignUp"}
];
const navu=[
    {link:"/userhome/books",name:"Books"},
    {link:"/userhome/authors",name:"Authors"},
    {link:"/logout",name:"Logout"}
 ];
 const nava=[
    {link:"/adminhome/adbooks",name:"Books"},
    {link:"/adminhome/adauthors",name:"Authors"},
    {link:"/adminhome/addbook",name:"Add Book"},
    {link:"/adminhome/addauthor",name:"Add Author"},
    {link:"/logout",name:"Logout"}
 ];
//const booksrouter=require("./src/routes/bookRoutes")(navu)
const userrouter=require("./src/routes/userRoutes")(navu)
const adminrouter=require("./src/routes/adminRoutes")(nava,storage)
//const authorsrouter=require("./src/routes/authorRoutes")(navu)
const loginrouter=require("./src/routes/loginRoutes")(nav)
const signuprouter=require("./src/routes/signupRoutes")(nav)
//const addbookrouter=require("./src/routes/addbookRoutes")(nava)
//const addauthorrouter=require("./src/routes/addauthorRoutes")(nava)

app.use('/userhome',userrouter);
app.use('/adminhome',adminrouter);
app.use('/userhome/books',userrouter);
app.use('/userhome/authors',userrouter);
app.use('/login',loginrouter);
app.use('/login/add',loginrouter);
app.use('/signup',signuprouter);
app.use('/signup/add',signuprouter);
app.use('/adminhome/addbook',adminrouter);
app.use('/adminhome/addbook/add',adminrouter);
app.use('/adminhome/addauthor',adminrouter);
app.use('/adminhome/addauthor/add',adminrouter);
app.use('/adminhome/adauthors',adminrouter);
app.use('/adminhome/adbooks',adminrouter);
app.use('/adminhome/adbooks/bupdate',adminrouter);
app.use('/adminhome/adauthors/aupdate',adminrouter);

app.get('/',function(req,res){
    //res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",{
        nav,
        title:"Welcome to Central Library"
    });
});


app.get('/logout',function(req,res){
    //res.sendFile(__dirname+"/src/views/index.html");
    res.render("login",{
        nav,
        title:"Welcome to Central Library"
    });
});

//app.listen(5000);
app.listen(PORT,()=>{console.log("Server ready at"+PORT)});