const mongoose=require('mongoose');

//mongoose.connect("mongodb://localhost:27017/librarycase")
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.honye.mongodb.net/libappcase?retryWrites=true&w=majority");
const Schema=mongoose.Schema;
const UserSchema= new Schema({
    user:String,
    password:String,
    email:String,
    userCategory:String
});
var Userdata=mongoose.model("userdata",UserSchema);
module.exports=Userdata;