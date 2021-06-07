const mongoose=require('mongoose');
//mongoose.connect("mongodb+srv://userone:userone@ictakfiles.honye.mongodb.net/libraryapp?retryWrites=true&w=majority");
mongoose.connect("mongodb://localhost:27017/librarycase")
const Schema=mongoose.Schema;
const BookSchema= new Schema({
    title:String,
    author:String,
    genre:String,
    image:String,
    desc:String
});
var Bookdata=mongoose.model("bookdata",BookSchema);
module.exports=Bookdata;