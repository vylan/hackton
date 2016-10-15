var express = require('express');
var router = express.Router();
var sos = require('../controller/sos');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.all('/test', sos.test);
router.post('/api/sos',sos.saveInfo)
router.get('/api/status?',sos.getStatus)

module.exports = router;