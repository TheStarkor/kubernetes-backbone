var express = require('express');
var cors = require('cors');
var helmet = require('helmet');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

const User = require('../models/User');

var app = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
    .connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongoDB connected"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send("USER");
})

app.post('/', (req,res) => {    
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    newUser.save()
        .then(user => res.json(user))
        .catch(err => {
            console.log(err);
        })
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