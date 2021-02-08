const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/tweets', {useNewUrlParser:true, useUnifiedTopology:true}, (err) => {
  if(!err)
    console.log("Mongo DB Connected");
  else
    console.log("error in DB connection: " + JSON.stringify(err,undefined,2));
});

module.exports = mongoose;
