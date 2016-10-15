'use strict';
var db = require('../model');


exports.test = function(req, res) {
    var info = {
        heartbeat: 100,
        blood: 2002
    }
    try {
        var sosInfo = {
            name: 'john',
            loc: [117, 43],
            info: JSON.stringify(info)
        }
    } catch (e) {
        console.log(e);
    }

    new db.Sos(sosInfo).save(function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
}

exports.saveInfo = function(req, res) {
    var info = req.body;
    console.log(info);
    new db.Sos(info).save(function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
}

exports.getStatus = function(req, res) {
    var names = req.query.names.split(',');
    console.log(names);
    var swlat = req.query.swlat;
    var swlng = req.query.swlng;
    var nelat = req.query.nelat;
    var nelng = req.query.nelng;
    var conditons = {
        name: {
            $in: names
        },
        cancel: false
    };
    db.Sos.queryByConditions(conditons, function(err, results) {
        if (err) {
            console.log(err)
        } else {
            return res.json(results);
        }
    })
}