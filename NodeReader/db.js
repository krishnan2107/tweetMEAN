/*jshint esversion: 6 */

const mongoose = require('mongoose');

mongooseOpts = { useNewUrlParser:true, useUnifiedTopology:true};
mongoose.connect('mongodb://mongo:27017/tweets',mongooseOpts, (err) => {
  if(!err)
    console.log("Mongo DB Connected");
  else
    console.log("error in DB connection: " + JSON.stringify(err,undefined,2));
});

module.exports = mongoose;
