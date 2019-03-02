const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


routes = require("./routes");


var Promise = require('bluebird');
require("date-format-lite");
 
var mysql = require('promise-mysql');
var db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbo_eng'
});

var port = 3000;
var app = express();
app.set('view engine', 'ejs');

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use(express.static(path.join(__dirname, "/")));
app.use(bodyParser.urlencoded({
    extended: true
}));


app.set('trust proxy', 1) // trust first proxy


app.listen(port, function () {
    console.log("Server is running on port " + port + "...");
});

// app.get("/view", function (req, res) { 
//     Promise.all([
//       db.query("SELECT * FROM gantt_tasks"),
//       db.query("SELECT * FROM gantt_links")
//     ]).then(function(results){
//       var tasks = results[0],
//       links = results[1];
//       console.log(tasks);
   
//       for (var i = 0; i < tasks.length; i++) {
//         tasks[i].start_date = tasks[i].start_date.format("YYYY-MM-DD hh:mm:ss");
//         tasks[i].open = true;
//       }

//       res.render('pages/view',{
//         data: tasks,
//         collections: { links: links }
//       });
   
   
//     }).catch(function(error) {
//      sendResponse(res, "error", null, error);
//     });
//   });

app.use("/", routes);




module.exports = app;