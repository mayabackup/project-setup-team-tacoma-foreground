// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
//const api = require('./home_api');
const axios = require("axios");
const api2 = require("./covid.js");
const algorithm = require('./algorithm.js');
const mongoose = require("mongoose");
require("./db");

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
// we will put some server logic here later...

api2.api();
const covid_locations=algorithm.algorithm();
let result=[];
let user_location
app.get("/", async (req, res) => {
  //const airports=await api.airports()
 let air= await axios.get('https://raw.githubusercontent.com/mwgg/Airports/master/airports.json')
 //air=JSON.stringify(air.data)
 //air= JSON.parse(air.data)
  res.send({ status:'success', message:air.data})
  userData={
    entered:false,
    citizenship:null,
    location:null,
    airport:null,

    //advanced; may be null
    advanced: null,
    continent: null,
    reason: null,
    name:null,
    email: null
  }
});

app.post('/', (req,res)=>{
  userData={
    entered:true,
    // do error checkings
    citizenship: req.body.citizenship,
    location: req.body.location,
    airport: req.body.airport.selectedOption.value,

    //advanced; may be null
    advanced: req.body.advanced,
    continent: req.body.continent,
    reason: req.body.reason,
    name:req.body.name,
    email: req.body.email,  
  }
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  
  res.send({status:'success', message:userData})
  //res.redirect('/confirmation');
})

app.get('/confirmation',(req,res)=>{
  console.log("sending info to the confirmation page", userData)
  res.send({status:'success', message:userData})
})
app.post('/confirmation',(req,res)=>{
  console.log("SAVE INFO INTO DATABASE")
  if(req.body.entered===true){
    const newQuery= new User_data({
      citizenship: userData['citizenship'],
      location:userData['location'],
      airport: userData['airport'],
      continent: userData['continent'],
      reason: userData['reason'],
      email: userData['email']
    })
  
    // eslint-disable-next-line no-undef
    newQuery.save(err => {
      console.log("the error " + err);
      res.redirect("/confirmation");
    });
  }
  
})

app.get('/top_locations' , (req,res)=>{
  result=[]
  console.log("entering the top locations")
  const loc=(Object.keys(covid_locations))
  if(userData!=='null' && typeof userData!=='undefined'){
    result.push({user_location:userData.location})
  }
  else{
    result.push({user_location:"Data Not Entered"})
  }
  
  user_location={}
  let flag=0;
  for(let x=0;x<loc.length;x++){
    if(flag===13){
     // console.log("entering the flag", x)
      break;
    }
    if(userData.continent!=null && typeof userData.continent!='undefined'){
      
      if(covid_locations[loc[x]].continent===userData.continent){
        result.push(covid_locations[loc[x]])
        flag++;
      }
      else{
       continue
      }
    }else{
      flag++;
      result.push(covid_locations[loc[x]])
    }
    
  }
  //const result=covid_locations.slice(0,10)
  res.send({status:'success', message:result})
})
app.post('/top_locations', (req,res)=>{
  console.log("the post for top locations" )
  user_location[req.body.destination]=covid_locations[req.body.destination]
  console.log(user_location)
  res.redirect('/covid_info')
})
//Get request for flight info
app.get("/flight_info", (req, res) => {
  console.log("sending info to the Flight Information page");
  res.send({ message: userData });
});

app.get("/covid_info", (req, res) => {
  console.log("sending info to the covid_info page");
  res.send({ message: user_location });
});
app.post("/covid_info", (req, res) => {
  console.log("sending info to the covid_info page", req.body.location.data.date);
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
  console.log(newLocation)
  newLocation.save(err => {
    console.log("the error " + err);
    res.redirect("/flight_info");
  });
});

app.get("/FeaturedLocations", (req, res) => {
  console.log("sending info to the FeaturedLocations page");
  result=[]
  const loc=(Object.keys(covid_locations))
  for(let x=0;x<6;x++){
    result.push(covid_locations[loc[x]])
  }
  res.send({status:'success', message:result})
});
// export the express app we created to make it available to other modules
module.exports = app;


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
    User.findOne({ username: username }, function(err, user) {
     // console.log("the user trying to login " + user);
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  console.log("serializeUser " + user.id);
  done(null, user.id);
});
//First argument corresponds to the key of the user object
// the object req.user is received
passport.deserializeUser(function(id, done) {
  //console.log(id);
  User.findById(id, function(err, user) {
    loggedIn = true;
    return done(err, user);
  });
});

app.get("/login", (req, res, next) => {
  //console.log("ENTERING ");
  if (loggedIn == false) {
    const user = String(req.query.username);
    const password = String(req.query.password);

    if (user != "undefined" && password != "undefined") {
      User.find({ username: user, password: password }, function(err, users) {
        //console.log("We are AUTHENTICATING " + users);
        if (users.length < 0) {
          res.render("login", { error: "Inncorrect username or password " });
        } else {
          req.logIn(user, function(err) {
            if (err) {
              return next(err);
            }
            return res.redirect("/login");
          });
        } 
				//console.log("ENTERING " + user + " " +password);
				//console.log("the users " +users);
      });
    } else {
      console.log("Could not login. Redirecting to login in again ");
      res.render("login", { error: req.session.error });
    }
  } else {
    res.locals.loggedIn = loggedIn;
    res.redirect("/");
  }
});

app.post("/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })
);

