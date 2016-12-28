var path = require('path');
var express = require('express');
var app = express();


//app.set('view engine', 'pug');
app.set('views', './');

app.use('/', express.static('./'));
app.use('/', express.static('./src/'));
app.use('/vendor', express.static('./node_modules'))


app.get('/', function(req, res){
    res.sendFile(path.normalize(__direname + './index.html'));
})

app.listen(3001, function(){
    console.log( 'ik draai op: http://localhost:3001' )
})