var express = require('express')
const process = require('process');

var expressapp = express()
expressapp.get('/', function (req, res) {
    res.send('{"message":"Modern Software Engineering Course - Deploying Containerized Application To The Cloud In Practice - By Majid Haghparast - Hello World Application - JavaScript v1"}')
})
expressapp.listen(5001, function () {
    console.log('Ready on port 5001!')
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});