/*jshint esversion: 6 */

const express = require('express');

var router = express.Router();

var { Tweet } =require('../models/tweet');

var ObjectId = require('mongoose').Types.ObjectId;

const agg = [
  {
    '$group': {
      '_id': {
        '$toLower': '$sentiment'
      },
      'count': {
        '$sum': 1
      }
    }
  }
];

router.get('/tweets',((req, res) => {
  Tweet.find((err, docs) => 
  {
    console.log("hit new tweets");
    if(!err) { 
      res.send(docs); 
    }
    else { console.error('Error in Retrieving tweets:'+JSON.stringify(err, undefined,2));}
  });
}));


//localhost:3200/tweets
router.get('/',((req, res) => {
  Tweet.find((err, docs) => {
    console.log("hit tweets");
    if(!err) { res.send(docs); }
    else { console.error('Error in Retrieving tweets:'+JSON.stringify(err, undefined,2));}
  });
}));

//localhost:3200/tweets/id
router.get('/:id',((req, res) => {
  if(!ObjectId.isValid(req.params.id)) {
    console.log("Here");
    return res.status(400).send('No record with given id: ' + req.params.id);
  }

  Tweet.findById(req.params.id, (err, doc) => {
    if(!err)
    {res.send(doc);}
    else
    {console.log("Error in retrieving Employee : " + JSON.stringify(err, undefined,2));}
  });

}));


//localhost:3200/tweets/count/positive
router.route('/count/positive').get(function(req,res){

  Tweet.countDocuments( {sentiment:"positive"}, function(err, result){

    if(err){
      console.log("here countpositive");
      res.send(err);
    }
    else{
      res.json(result);
    }

  });
});

//localhost:3200/tweets/count/negative
router.route('/count/negative').get(function(req,res){

  Tweet.countDocuments( {sentiment:"negative"}, function(err, result){

    if(err){
      console.log("here countnegative");
      res.send(err);
    }
    else{
      res.json(result);
    }

  });
});

//localhost:3200/tweets/count/neutral
router.route('/count/neutral').get(function(req,res){

  Tweet.countDocuments( {sentiment:"neutral"}, function(err, result){

    if(err){
      console.log("here countnegative");
      res.send(err);
    }
    else{
      res.json(result);
    }

  });
});

//localhost:3200/tweets/count/all
router.route('/count/all').get(function(req,res){

  Tweet.countDocuments( {}, function(err, result){

    if(err){
      res.send(err);
    }
    else{
      res.json(result);
    }

  });
});

//localhost:3200/tweets/count/distinct
router.route('/count/distinct').get(function(req,res){

  Tweet.distinct( 'sentiment', function(err, result){

    if(err){
      res.send(err);
    }
    else{
      res.json(result);
    }

  });
});

//localhost:3200/tweets/count/agg
router.route('/count/agg').get(function(req,res){

    Tweet.aggregate(agg, (err, result)=> {
          if(err){
      res.send(err);
    }
    else{
      res.json(result);
    }
    });

});


module.exports = router;
