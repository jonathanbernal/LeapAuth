var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.writeHead(200, 'OK');
  res.redirect('./login.html');
});

router.post('/', function(req, res, next){
    
})



module.exports = router;
