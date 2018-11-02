var mongoose=require('mongoose');
//var rev=mongoose.model('Review');
var rev=require('../models/review');
module.exports.feedRead = function(req, res) {
    res.render("feedback", {
      title: "feedback FoodSetGo!",
    });
  };
  

module.exports.feedCreate=function(req,res)
{
  // let rev=new rev();
  rev.name=req.body.name;
  rev.email=req.body.email;
  rev.restName=req.body.restName;
  rev.comments=req.body.comments;
  console.log('success');
  rev.save(function(err)
    {
      if (err){
        console.log(err);
        return;
      }else{
        res.send('Review Saved successfully');
        res.redirect('/');
      }
    });
};

module.exports.feedReadrev=function(req,res)
{
    rev
      .findById(req.params.feedbackid)
      .exec(function(err,feedback)
      {
        sendJsonResponse
      })
}