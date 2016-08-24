var express = require('express');
var app = express();
var path = require('path');
var config = require(__dirname+'/config.js')

// app.use('/public',express.static(__dirname + "/public"));
app.set('view engine','jade')
app.set('views', __dirname + '/public');
app.get('/resume',function(req,res){
	res.download('./public/AnkurRanaCV.pdf','AnkurRana_CV.pdf')
})
app.use('/public',express.static(__dirname + "/public"));
app.get('/',function(req,res){
	res.render('index')
})

app.get('/data',function(req,res){
	res.sendFile( path.resolve(__dirname ,'./data/ankur.json'));
})


app.listen(config.PORT,function(){
	console.log('Started listening to Port ' + config.PORT );
});