var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/login_success.html', (req, res) => {
    res.sendFile(__dirname + '/login_success.html');
});

app.post('/login', (req, res) => {
    res.redirect(302, 'https://autologin-practice.onrender.com');
});

var port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Express server start on port: %d, mode: %s.", port, app.settings.env);
});
