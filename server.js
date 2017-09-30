// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'html');

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:date", function (request, response) {
  var dateString = request.params.date;
  var date;
  var result = {};
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  for (var i = 0; i < months.length; i++) {
    if (dateString.startsWith(months[i])) {
      result.unix = Date.parse(dateString) / 1000;
      result.natural = dateString;
      response.send(result);
    }
  }
  
  dateNumber = Number(dateString);
  if (Number.isNaN(dateNumber)) {
    result.unix = null;
    result.natural = null;
  } else {
    date = new Date(dateNumber * 1000);
    result.natural = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    result.unix = Date.parse(result.natural) / 1000;
  }
  response.send(result);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
