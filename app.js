var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  //do your   logging here
  //call 'next', or else your app will be a black hole - receiving requests but never properly responding
  console.log(req.method + ': ' + req.url);
  next();
});

//app.get('/news', function(req, res, next){
//  res.send('There is no news');
//  next();
//});
//
//app.use('/special/', function(req, res, next){
//  res.send('Status ' + res.statusCode);
//  next();
//})
//
//app.get('/is-anybody-in-there', function(req, res, next){
//  res.send('Nope! Status code is:' + res.statusCode);
//  next();
//});
//
app.post('/modernism', function(req, res, next){
  res.send('Is stupid');
  next();
})



app.get('/', function(req, res, next){
  res.send('Hello World! Status code is: ' + req.method + ': ' + res.statusCode);
  next();
});

app.listen(port, function(){
  console.log(`listening on port ${port}`);
});