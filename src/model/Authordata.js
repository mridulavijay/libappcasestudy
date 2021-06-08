const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.honye.mongodb.net/libappcase",{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
//mongoose.connect("mongodb://localhost:27017/librarycase")
const Schema=mongoose.Schema;
const AuthorSchema= new Schema({
    author:String,
    book:String,
    genre:String,
    image:String,
    desc:String
});
var Authordata=mongoose.model("authordata",AuthorSchema);
module.exports=Authordata;