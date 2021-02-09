/*jshint esversion: 6 */

const mongoose = require('mongoose');

mongooseOpts = { useNewUrlParser:true, useUnifiedTopology:true,uri_decode_auth: true};
cStr = 'mongodb://mongoj:P0Nrx9LSyy^HAJ7zz^^ZYNo^k@mongo:27017/tweets';

mongoose.connect(cStr,mongooseOpts, (err) => {
  if(!err)
    console.log("Mongo DB Connected");
  else
    console.error("error in DB connection: " + JSON.stringify(err,undefined,2));
});

module.exports = mongoose;
