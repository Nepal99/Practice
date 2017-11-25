const express = require('express');


const app = express();  // Here we create the instance.

app.use('/app', express.static('src'));     
/**
 * serving static HTML. 
 * Here src is the original folder name and the app is the alias name.
 * To hide the original folder structure to minimize the hacking we hide the original folder structure.
 *  
 */
app.use('/modules', express.static('node_modules'));   

 app.get('/', function(req, res){
    console.log("Browser accessed this...");

    res.send('Hello world!');
});


app.get('/hello', function(req, res){
    console.log("Browser accessed this...");

    res.send('Hi!');
});



app.listen(3000, function(){
    console.log('Example listening on the port number 3000!');
});
