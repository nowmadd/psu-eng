const express = require("express");
const func = require('./func/functions');
var session = require('express-session');


router = express();
router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))


const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "psu_eng"
});

var authenticate = function (req, res,next) {
  var isAuthenticated = !req.session.user ? false : true;

  if (isAuthenticated) {
    next();
  }
  else {
    // redirect user to authentication page or throw error or whatever
    res.redirect('/login');
    console.log('logged out');
  }
}

router.use(function(req, res, next) {
    res.locals.user = req.session.user;
    res.locals.name = req.session.name;
    res.locals.id = req.session.id;
    res.locals.usertype = req.session.usertype;
    res.locals.profile = req.session.profile;
    next();
    
  });

router.get('/', function(req, res){      
    res.render('pages/index',{
        }); 
});


router.get('/ongoing', function(req, res){      
  con.query('SELECT * from projects WHERE status = ?', "ongoing", function(err, result){
    console.log(result)
    res.render('pages/ongoing', {
        items : result                         
    });  
  }); 
});
router.get('/finished', function(req, res){     
  
  con.query('SELECT * from projects WHERE status = ?', "finished", function(err, result){
    console.log(result)
    res.render('pages/finished', {
        items : result                         
    });  
  }); 


});
router.get('/users', function(req, res){      
  res.render('pages/users',{
      }); 
});
router.get('/profile', function(req, res){      
  res.render('pages/profile',{
      }); 
});
router.get('/add-new', function(req, res){      
  res.render('pages/new-project',{
      }); 
});


router.post('/add-new', function(req, res){      
  console.log(req.body);

  //insert here
});

router.get('/login', function(req, res){      
  res.render('pages/login',{
        msg: ''
      }); 
});



// router.get('/login', function(req, res){      
//   res.render('pages/index',{
//       }); 
// });


router.get('/logout', function(req, res){
    req.session.destroy(function(){
         console.log('user logout');
     });
    res.redirect('/login');
});

router.get('*', function(req, res){
    res.render('pages/404',{
      
    });
    
});


module.exports = router;