const mongoose = require('mongoose');

var Tweet = mongoose.model('thirty2', {
created_at: {type: Date},
user: [{
  id_str: String,
  name: String,
  screen_name: String,
  location: String,
}],
  text:String,
  sentiment:String,
});

module.exports = {Tweet: Tweet};
