var redis = require('redis')
var client = redis.createClient(6379, "127.0.0.1");
client.on("error", function (err) {
    if(err)
        console.log("Error " + err);
});

client.hset("elder_status","john","sos",redis.print)
client.hget("elder_status","john",function(err,res){
    console.log("res is "+res)
})

