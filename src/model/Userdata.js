const mongoose=require('mongoose');
//mongoose.connect("mongodb+srv://userone:userone@ictakfiles.honye.mongodb.net/libraryapp?retryWrites=true&w=majority");
mongoose.connect("mongodb://localhost:27017/librarycase")
const Schema=mongoose.Schema;
const UserSchema= new Schema({
    user:String,
    password:String,
    email:String,
    userCategory:String
});
var Userdata=mongoose.model("userdata",UserSchema);
module.exports=Userdata;