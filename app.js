const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


routes = require("./routes");

var port = 3000;
var app = express();
app.set('view engine', 'ejs'); 

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use(express.static(path.join(__dirname, "/")));
app.use(bodyParser.urlencoded({ extended: true }));


app.set('trust proxy', 1) // trust first proxy

 
app.listen(port, function(){
    console.log("Server is running on port "+port+"...");
});

app.use("/", routes);

module.exports = app;