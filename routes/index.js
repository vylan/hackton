var express = require('express');
var router = express.Router();
var sos = require('../controller/sos');
var help = require('../controller/help')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.all('/test', sos.test);
router.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});
router.post('/api/sos',sos.saveInfo)
router.get('/api/status?',sos.getStatus)
router.post('/api/help',help.saveInfo)
module.exports = router;
