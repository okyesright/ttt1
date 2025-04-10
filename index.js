const mongoose=require("./test.js");
const Top250Schema=new mongoose.Schema({
	id:Number,
	title:String,
	detail:String,
	imagepath:String,
	dynasty:String,
	type:String
})
const Top250Model=mongoose.model("things",Top250Schema,"things");
module.exports=Top250Model;