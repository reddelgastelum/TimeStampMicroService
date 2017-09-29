// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:date", function (request, response) {
  var date = request.params.date;
  console.log(date);
  var result = {};
  date = Number(date);
  console.log(Number.isNaN(date));
  
  
  if (Number.isNaN(date)) {
    result.natural = true;
  }
  
  
  //var result = date;
  console.log(result);
  response.send(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
