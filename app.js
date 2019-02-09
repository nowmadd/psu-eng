const express = require('express');
const promisemysql = require('promise-mysql');
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');
const mysql = require('mysql');
const FileUploadWithPreview = require('file-upload-with-preview');
require("date-format-lite");


 
var port = 1337;
var app = express();
app.set('view engine', 'ejs');

app.use('/css', express.static(__dirname + '/node_modules/file-upload-with-preview/dist'));
app.use('/js', express.static(__dirname + '/node_modules/file-upload-with-preview/dist'));
app.use(express.static(path.join(__dirname, "/")));
app.use(bodyParser.urlencoded({ extended: true }));


 
app.listen(port, function(){
    console.log("Server is running on port "+port+"...");
});





const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_eng"
});

app.get('/finish', function(req, res){
    con.query("SELECT * FROM projects WHERE status='finished'", function(err, result){
        res.render('pages/finished', {
            items : result 
        });  
    });

});


app.get('/newfile', function(req, res){
    con.query("SELECT * FROM projects WHERE status='finished'", function(err, result){
        res.render('pages/newfile', {
            items : result 
        });  
    });

});


app.get('/ongoing', function(req, res){
    con.query("SELECT * FROM projects WHERE status='ongoing'", function(err, result){
        res.render('pages/ongoing', {
            items : result 
        });  
    });

});





app.get('/', function(req, res){
        
    res.render('index',{
        // siteTitle: siteTitle,
        // pageTitle: "Home",
        // user: req.session.user
    });

});


app.get('*', function(req, res){
    res.render('pages/404',{
        //pageTitle: "Error",
       // user: req.session.user
    });
    
});

