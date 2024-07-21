//import modules
require('dotenv').config(); //require dotenv
const express = require('express'); // require express
const path = require('path'); // require path
const configViewEngine = require('./config/viewEngine');
const configStaticFile = require('./config/staticFile');
const configReqBody = require('./config/reqBody');
const webRouters = require('./routes/web');
const connection = require('./config/database');

//set up variables
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME;

//config view engine:
configViewEngine(app);

//config static file:
configStaticFile(app);

//config req.body:
configReqBody(app);

//add routes:
app.use('/', webRouters);

//listen to port
app.listen(port, hostname, function(){
  console.log(`App hosting on port ${port}`);
})