//import modules
const express = require('express'); // require express
const path = require('path'); // require path
require('dotenv').config(); //require dotenv

//set up variables
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;

//config template engine:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//config static file:
app.use(express.static(path.join(__dirname, 'public')));

//add routes:
app.get('/', function(req, res){
  res.render('xinchao.ejs');
});

app.get('/bye', function(req,res){
  res.send('see you again');
});

//listen to port
app.listen(port, hostname, function(){
  console.log(`App hosting on port ${port}`);
})