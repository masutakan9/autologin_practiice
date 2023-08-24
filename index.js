var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/login', (req, res) => {
    res.send('logged in.');
});

var port = 3000;
app.listen(port, function(){
    console.log("Express server start on port: %d, mode: %s.", port, app.settings.env);
});
