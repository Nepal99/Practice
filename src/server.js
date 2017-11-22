const express = require('express');



const app = express();  // Here we create the instance.

app.get('/', function(req, res){
    console.log("Browser accessed this...");

    res.send('Hello world!');


});

app.listen(3000, function(){
    console.log('Example listening on the port number 3000!');
});
