const express = require("express");
const func = require('./func/functions');
var session = require('express-session');
var moment = require('moment');
moment().format();

require("date-format-lite");


router = express();
router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


const mysql = require('mysql');


const con = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  user: "root",
  password: "",
  database: "dbo_eng"
});


var authenticate = function (req, res, next) {
  var isAuthenticated = !req.session.user ? false : true;

  if (isAuthenticated) {
    next();
  } else {
    // redirect user to authentication page or throw error or whatever
    res.redirect('/login');
    console.log('logged out');
  }
}

router.use(function (req, res, next) {
  res.locals.user = req.session.user;
  res.locals.name = req.session.name;
  res.locals.id = req.session.id;
  res.locals.usertype = req.session.usertype;
  res.locals.profile = req.session.profile;
  next();

});

router.get('/', function (req, res) {
  res.render('pages/index', {});
});


router.get('/ongoing', function (req, res) {
  con.query('SELECT * from projects WHERE status = ?', "ongoing", function (err, result) {

    res.render('pages/ongoing', {
      items: result
    });
  });
});
router.get('/finished', function (req, res) {
  con.query('SELECT * from projects WHERE status = ?', "finished", function (err, result) {

    res.render('pages/finished', {
      items: result
    });
  });


});
router.get('/users', function (req, res) {
  res.render('pages/users', {});
});
router.get('/profile', function (req, res) {
  res.render('pages/profile', {});
});
router.get('/add-new', function (req, res) {
  res.render('pages/new-project', {
    msg: '',


  });
});



router.post('/add-new', function (req, res) {
  try {
    req.body.status = 'ongoing';
    var start_date = moment(req.body.start_date).format('YYYY-MM-DD');
    con.query('INSERT INTO projects SET ?', req.body, function (error, results, fields) {
      if (error) throw error;
    
      var proj_id = results.insertId;
      const activites = "INSERT INTO gantt_tasks VALUES ('', '1', 'PHASE 1', '"+start_date+"', '', '', '0', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '2', 'CLEARING WORKS', '"+start_date+"', '', '', '1', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '3', 'EXCAVATION AND BACK FILL', '"+start_date+"', '', '', '1', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '4', 'REINFORCING STILLBARS', '"+start_date+"', '', '', '1', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '5', 'CONCRETE WORKS', '"+start_date+"', '', '', '1', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '6', 'a. FOOTING', '"+start_date+"', '', '', '5', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '7', 'b. COLUMN', '"+start_date+"',  '', '', '5', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '6', 'c. FOOTING TIEBEAM', '"+start_date+"', '', '', '5', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '7', 'd. FLOOR SLAB', '"+start_date+"', '', '', '5', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '8', 'e. BEAM', '"+start_date+"','', '', '5', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '9', 'FORM WORKS', '"+start_date+"', '', '', '1', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '10', 'MANSONRY WORKS', '"+start_date+"', '', '', '1', '"+proj_id+"', '');"+ 
      "INSERT INTO gantt_tasks VALUES ('', '11', 'a. EXTERIOR AND INTERIOR WALLS', '"+start_date+"', '', '', '10', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '12', 'PHASE 2', '"+start_date+"',  '', '', '0', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '13', 'STEEL WORKS', '"+start_date+"',  '', '', '12', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '14', 'STEEL TRUSS', '"+start_date+"',  '', '', '13', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '15', 'ROOFING WORKS', '"+start_date+"',  '', '', '12', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '16', 'PLASTERING', '"+start_date+"',  '', '', '12', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '17', 'PHASE 3', '"+start_date+"', '', '', '0', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '18', 'TILE WORKS', '"+start_date+"', '', '', '17', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '19', 'PAINTING WORKS', '"+start_date+"',  '', '', '17', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '20', 'CEILING WORKS', '"+start_date+"',  '', '', '17', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '21', 'PHASE 4', '"+start_date+"',  '', '', '0', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '22', 'ELECTRICAL WORKS', '"+start_date+"',  '', '', '21', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '23', 'a. LIGHTING WORKS', '"+start_date+"', '', '', '22', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '24', 'b.POWER LAYOUT', '"+start_date+"', '', '', '22', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '25', 'c. MECHANICAL LAYOUT', '"+start_date+"',  '', '', '22', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '26', 'PLUMBING WORKS', '"+start_date+"',  '', '', '21', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '27', 'a. SANITARY', '"+start_date+"',  '', '', '26', '"+proj_id+"', '');"+
      "INSERT INTO gantt_tasks VALUES ('', '28', 'b. WATER LAYOUT', '"+start_date+"',  '', '', '26', '"+proj_id+"', '');"
      
      con.query(activites, function (error, result, fields) {
        if (error) {throw error;
        } else {
        res.render('pages/new-project', {
          msg: 'Successfull',
      
      
        });
      }

        
        
      });

    });

  } catch {

    res.redirect('*');
  }
  
});

router.get('/login', function (req, res) {
  res.render('pages/login', {
    msg: ''
  });
});

router.get('/view', function (req, res) {
      var proj_id = req.query.id;

      con.query('SELECT COUNT(proj_id) AS id from projects where proj_id = ?', proj_id, function (err, result) {
        var x = JSON.parse(JSON.stringify(result[0]));
        if (x.id > 0) {
          con.query('SELECT * from projects where proj_id = ?', proj_id, function (err, result) {

            var project = JSON.parse(JSON.stringify(result[0]));
            //gantt
            con.query('SELECT * from gantt_tasks WHERE proj_id = ?', proj_id, function (err, result) {
              
              for(var i = 0; i < result.length; i++){
                result[i].start_date = moment(result[i].start_date).format('YYYY-MM-DD');
                var date= moment(result[i].start_date, 'YYYY-MM-DD').add(result[i].duration, 'days').format('YYYY-MM-DD');
                
                var update = moment(result[i].updated).format('YYYY-MM-DD');

                if(update==="Invalid date") {
                  update = "0000-00-00"
                }
                result[i].update = update;
                result[i].target = date;
              }
              
              
              
              
              
                
              var results = JSON.stringify(result);
           
              
            
              
              var task = {
                "data": JSON.parse(results)
              }
              for (var i = 0; i < task.data.length; i++) {
                var date = moment(task.data[i].start_date).format('YYYY-MM-DD hh:mm:ss');
                task.data[i].start_date = date;
                // console.log(task.data[i].target);
                task.data[i].open = true;
                       
              }

             
              //task.data[i].target = moment(task.data[i].start_date, 'YYYY-MM-DD').add(10, 'days').format('YYYY-MM-DD');
              
              var stringified = JSON.stringify(task);
                     
              res.render('pages/view', {
                  items : result,
                  tasks: stringified
                  ,project: project,
                  
                });

            });
          });
        } else res.redirect('/no-project-exist');
      });

    });

 

// router.get('/login', function(req, res){      
//   res.render('pages/index',{
//       }); 
// });


router.get('/edit-activity', function(req, res){
  try{  


        con.query('SELECT * from gantt_tasks WHERE final_id = ?', req.query.id, function (err, result) {
          result[0].start_date = moment(result[0].start_date).format('YYYY-MM-DD');
          result[0].target_date = moment(result[0].start_date).add(result[0].duration, 'days').format('YYYY-MM-DD');
          result[0].progressin100 = (result[0].progress === "0") ? 0 : result[0].progress * 100 ;

          con.query("SELECT proj_name , start_date, target_date from projects WHERE proj_id = ?", result[0].proj_id, function (err, projectresult){
            
            res.render('pages/edit_activity', {
              project: projectresult[0],
              id: req.query.id,
              items: result
            });

          });
          
       
      });
    }
    catch {
      res.redirect('*')
    }
});






router.post('/update-activity', function (req,res){
  var id = req.body.final_id;
  var progress = parseFloat(req.body.progress * .01);
  var updated = moment().format('YYYY-MM-DD')
  var duration = moment(req.body.target_date).diff(moment(req.body.start_date), 'days');
  try{
  con.query("UPDATE gantt_tasks SET progress='"+progress+"', updated = '"+ updated+"',text='"+req.body.text+"', duration='"+duration+"',start_date ='"+req.body.start_date+"' WHERE final_id='"+id+"'", function (err, result) {
    
  
    res.redirect('/view?id=' + req.body.id);
  



  });
  }
  catch {

    res.redirect('/');
  }
});


router.get('/finish', function (req, res) {
  var id = req.query.id;
  var updated = moment().format('YYYY-MM-DD')
  try{
  con.query("UPDATE gantt_tasks SET progress='1', updated='"+updated+"' WHERE final_id='"+id+"'", function (err, result) {
    res.redirect('/view?id=' + req.query.proj_id);
  });
  }
  catch {
    res.redirect('/');
  }
});

router.get('/logout', function (req, res) {
  req.session.destroy(function () {
    console.log('user logout');
  });
  res.redirect('/login');
});

router.get('*', function (req, res) {
  res.render('pages/404', {

  });

});


module.exports = router;