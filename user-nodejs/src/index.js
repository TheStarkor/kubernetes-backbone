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
	res.send('User');
});

app.get('/signout', (req, res) => {
    res.send('Sign Out!');
})

app.get('/login', (req, res) => {
    res.send('Log In!');
})

app.get('/logout', (req, res) => {
    res.send('Log Out!');
})

var server = app.listen(8000,function(){
  	var port = server.address().port;
  	console.log(`App listening at http://localhost:${port}`);
});