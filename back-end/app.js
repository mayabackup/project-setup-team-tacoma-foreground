/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const api2 = require("./covid.js");
const algorithm = require('./algorithm.js');
const mongoose = require("mongoose");
const { body, validationResult } = require('express-validator');
require("./db");
let user_id;

// encryption data
const bcrypt = require('bcrypt');
const saltRounds = 10;

const cors = require("cors");
//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
const User_data = mongoose.model("user_data");
// eslint-disable-next-line no-unused-vars
const User = mongoose.model("User");
const country_details = mongoose.model("country_details");
const countries = mongoose.model("countries");

// middleware to get req body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require("path");
//const { airports } = require("./home_api");

// eslint-disable-next-line no-undef
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// body parser
app.use(express.urlencoded({ extended: false }));

let userData;

const logger = (req, res, next) => {
  console.log(req.method, req.path, req.query);
  next();
};

app.use((req, res, next) => {
  if (req.get("Host")) {
    next();
  } else {
    res.status(400).send("invalid request... add a host header plz");
  }
});

app.use(logger);

//authenticaiton using passport
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");

app.use(flash());

const sessionOptions = {
  secret: "secret cookie to be stored elsewhere",
  resave: true,
  saveUninitialized: true
};

app.use(session(sessionOptions));


let loggedIn = false;

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.locals.log = loggedIn;
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, "public")));

passport.use(
  new LocalStrategy({ passReqToCallback: true }, function(
    req,
    username,
    password,
    done
  ) {
    
    User.findOne({ username:username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, req.flash('message', 'User does not exist' ))
      }
      const isValidPass = bcrypt.compareSync(password, user.password);
      loggedIn=isValidPass
      if (!isValidPass) {
        return done(null, false, req.flash( 'message', "Incorrect password." ));
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  console.log("serializeUser " + user.id);
  user_id=user.id
  done(null, user.id);
});
//First argument corresponds to the key of the user object
// the object req.user is received
passport.deserializeUser(function(id, done) {

  User.findById(id, function(err, user) {
    loggedIn = true;
    return done(err, user);
  });
});
app.get('/login', (req, res) => {
  const message=req.flash('message')
  console.log(loggedIn)
  if(user_id===null){
    res.send({error:message})
  }
  else{
    res.send({error:message,user:user_id})
  }
  
}
)
app.post("/login",
  passport.authenticate("local", {
    //successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  }),
  (req,res)=>{
    res.send({error:loggedIn})
  }
);

api2;
let covid_locations=algorithm.algorithm();
let result=[];
let user_location

app.get("/", async (req, res) => {
  /*let air= await axios.get('https://raw.githubusercontent.com/mwgg/Airports/master/airports.json')

  res.send({ status:'success', message:air.data})*/
  covid_locations=algorithm.algorithm();
    userData={
      entered:false,
      //advanced; may be null
      advanced: null,
    }
  res.send({ status:'success',user:user_id})

});

app.post('/',(req,res)=>{
  console.log("posting user data")
  userData={
    entered:true,
    // do error checkings
    continent: req.body.continent,  
  }
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  res.send({status:'success', message:userData})
})

app.get('/signup',(req,res)=>{
  res.send({status:'success',user:user_id})
})

app.post('/signup',
body('email').isEmail(),
body('password').isLength({min:5}),
 (req,res)=>{
  console.log("sending info to the signup page")

  // do error checkings
  // eslint-disable-next-line no-unused-vars
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    console.log(errors.array())
    return res.send({errors:errors.array()});
  }
  else{
  let user_signup={
    username: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirm,
    name:req.body.name
  }
  // hash and salt the password to encrypt
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    const newUser= new User({
      name: req.body.name,
      password: hash,
      username: req.body.email,
    })
    newUser.save(err => {
      console.log("the error " + err);
      return res.send({errors:null});
    });
}); 
}
})

app.get('/confirmation',(req,res)=>{
  res.send({status:'success', message:userData})
})
app.post('/confirmation',(req,res)=>{
  if(req.body.entered===true){   
    // eslint-disable-next-line no-undef
    if(loggedIn===true){
    countries.findOne({ user: user_id}, function(err,list){
      if(list===null){
        const newQuery= new User_data({
          user: user_id,
          continent: userData['continent'],
        })
        newQuery.save(err=>{
          console.log('error',err)
        })
        const new_list=new countries({
          user: user_id,
          user_data:newQuery
        })
        new_list.save(err=>{
          console.log('error',err)
        })
      }
      else{
      const newQuery= new User_data({
        continent: userData['continent'],
      })
      newQuery.save(err => {
        console.log("the error " + err);
        countries.findOne({ user:user_id}, (err, user) =>{
          user.user_data.push(newQuery);
          user.save(function(err) {
            if (err) {
              console.log(err);
            } 
          });
        })
      })}
        res.redirect("/top_location");
      });
    }}
    })
  

app.get('/top_locations' , (req,res)=>{
  result=[]
  const loc=(Object.keys(covid_locations))
  if(userData!=='null' && typeof userData!=='undefined'){
    result.push({user_location:userData.continent})
  }
  else{
    result.push({user_location:"Data Not Entered"})
  }
  let flag=0;
  for(let x=0;x<loc.length;x++){
    if(flag===13){
      break;
    }
    if(userData.continent!=null && typeof userData.continent!='undefined'){
      
      if(covid_locations[loc[x]].continent!=null && typeof covid_locations[loc[x]].continent!='undefined'){
        console.log((covid_locations[loc[x]].continent).toLowerCase())
        console.log((userData.continent).toLowerCase())
        const covid_database=(userData.continent).trim()
      if((covid_locations[loc[x]].continent).toLowerCase()===(covid_database).toLowerCase()){
        result.push(covid_locations[loc[x]])
        flag++;
      }
    }
      else{
       continue
      }
    }else{
      flag++;
      result.push(covid_locations[loc[x]])
    }
  }
  res.send({status:'success', message:result})
})
app.post('/top_locations', (req,res)=>{
  user_location={}
  user_location[req.body.destination]=covid_locations[req.body.destination]
   res.redirect('/covid_info')
})

app.get("/covid_info", (req, res) => {
  res.send({ status:"success", message: user_location });
});
app.post("/covid_info", (req, res) => {
  if(loggedIn===true){
  countries.findOne({ user: user_id}, function(err,list){
    const newLocation=new country_details({
      date: req.body.location.data.date,
      total_cases:req.body.location.data.total_cases,
      total_vaccinations:req.body.location.data.total_vaccinations,
      new_vaccinations_smoothed_per_million:req.body.location.data.new_vaccinations_smoothed_per_million,
      continent:req.body.location.continent,
      location:req.body.location.location,
      Workplace:req.body.location.Workplace,
      Internal:req.body.location.Internal,
      International:req.body.location.International,
      ranking:{
        cases:req.body.location.ranking.cases,
        vaccination:req.body.location.ranking.vaccination,
        mortality:req.body.location.ranking.mortality,
        overall:req.body.location.ranking.overall
      }
    })
    if(list!==null){
      newLocation.save(err => {
        countries.findOne({ user: user_id}, (err, user) => {
          user.country_details.push(newLocation)
          user.save(function(err){
            if(err){
              console.log(err)
            }
          })
        })
      });
    }
});
  res.send({error:false});
  }else{
    res.send({error:true});
  }
})


app.get("/FeaturedLocations", (req, res) => {
  result=[]
  const loc=(Object.keys(covid_locations))
  for(let x=0;x<6;x++){
    result.push(covid_locations[loc[x]])
  }
  res.send({status:'success', message:result})
});

app.get("/favorites", (req, res) => {
  result=[]
  if(loggedIn===true){
  countries.findOne({ user: user_id}, function(err,list){    
      
    for(let x in list.country_details[0]['__parentArray'] ){
      result.push(list.country_details[0]['__parentArray'][x])
    }
    let updated=[];
    for(let x in covid_locations){
      for(let y in list.country_details[0]['__parentArray'])
        if(x===list.country_details[0]['__parentArray'][y].location){
          console.log("entering the update")
          updated.push(covid_locations[x])
        }
    
    }
    res.send({status:'success', message:result, update:updated})

  })
}else{
  res.send({error:" PLEASE LOG IN OR CREATE AN ACCOUNT TO SAVE OR VIEW LOCATIONS"});
}
 
});
app.get("/logout", function(req, res) {
  req.logout();
  loggedIn = false;
  req.session.destroy(function (err) {
    res.redirect('/login')
    user_id=""
    loggedIn = false
  });
 
  res.locals.loggedIn = false;
});
app.get("/search", function(req, res) {
  const country_user=req.body.country;
});
app.post("/search", function(req, res) {
  let country_user=req.body.country;
  let data_country
  country_user=country_user.toLowerCase().trim()
  country_user=country_user.charAt(0).toUpperCase() + country_user.slice(1).toLowerCase();
  data_country=covid_locations[country_user]
  if(typeof data_country==='undefined'){
    res.send({status:'success', message:data_country, unknown:true})
  }
  else{
    res.send({status:'success', message:data_country, unknown:false})
  }
  
});
// export the express app we created to make it available to other modules
module.exports = app;

