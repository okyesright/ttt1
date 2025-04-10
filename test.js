const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://okyesright:okyesright@cluster0.wgf8pwt.mongodb.net/things?retryWrites=true&w=majority&appName=Cluster0',
{
	useNewUrlParser:true,
	useUnifiedTopology:true,
	})
	mongoose.connection.on('connected', () => {
	  console.log('✅ 成功连接到 MongoDB');
	});
	
	mongoose.connection.on('error', (err) => {
	  console.error('❌ MongoDB 连接错误:', err);
	});
module.exports=mongoose;
