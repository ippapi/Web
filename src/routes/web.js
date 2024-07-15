const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
    res.render('xinchao.ejs');
  });
  
router.get('/bye', function(req,res){
    res.send('see you again');
});

module.exports = router;