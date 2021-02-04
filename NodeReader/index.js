const express  =require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const {mongoose} = require('./db.js');

var tweetcontroller = require('./controllers/tweetController');


var app = express();
app.use(bodyparser.json());
var o = {origin: [, 'http://localhost:4200', 'http://localhost:4300']};
// var p = {origin: 'http://localhost:4300'};
app.use(cors(o));


app.listen(3200, ()=>console.log('Server started at port: 3200'));

app.use('/tweets', tweetcontroller);
