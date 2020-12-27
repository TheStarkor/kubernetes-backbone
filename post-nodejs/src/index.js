var express = require('express');
var cors = require('cors');
var helmet = require('helmet');
var bodyParser = require('body-parser');

var app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => {
	res.send('Post');
});

app.get('/create', (req,res) => {
	res.send('Create Post');
});

app.get('/update', (req,res) => {
	res.send('Update Post');
});

app.get('/delete', (req,res) => {
	res.send('Delete Post');
});

var server = app.listen(9000,function(){
  	var port = server.address().port;
  	console.log(`App listening at http://localhost:${port}`);
});