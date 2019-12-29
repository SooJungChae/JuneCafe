var express = require('express');
var cors = require('cors');
var menu = require('./mock_menu');
var app = express();
const port = 3000;

app.use(cors())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  console.log('get root');
  res.status(200).json({
    result: 'ok',
    data: menu
  });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

