// 引入express 框架
const express = require('express');
// 创建web服务
const app = express();


app.get('/',(req,res)=>{
	res.send('hello blog');
})

app.listen(3000,err=>{
	if(!err){
		console.log('服务器启动成功请访问localhost:3000');
	}
});