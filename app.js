var express = require('express');
var app = express();
var path = require('path');

// app.use('/public',express.static(__dirname + "/public"));

app.use('/resume',function(req,res){
	res.download('./public/AnkurRanaCV.pdf','AnkurRana_CV.pdf')
})

app.use('/',function(req,res){
	res.sendFile( path.join(__dirname,'/public/index.html'));
})

if(!process.env.PORT){
	PORT = 3002;
}else{
	PORT = process.env.PORT
}

app.listen(PORT,function(){
	console.log('Started listening to Port ' + PORT );
});