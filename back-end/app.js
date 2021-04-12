// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
//const api = require('./home_api');
const axios = require("axios");
const api2 = require("./covid.js");
const algorithm = require('./algorithm.js');

const cors = require("cors");
//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
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
  res.redirect('/confirmation');
})

app.get('/confirmation',(req,res)=>{
  console.log("sending info to the confirmation page", userData)
  res.send({status:'success', message:userData})
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
  for(let x=0;x<13;x++){
    result.push(covid_locations[loc[x]])
  }
  //const result=covid_locations.slice(0,10)
  res.send({status:'success', message:result})
})
app.post('/top_locations', (req,res)=>{
  console.log("the post for top locations" , req.body)
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
  console.log("sending info to the covid_info page", user_location);
  res.send({ message: user_location });
});

app.get("/Featured Locations", (req, res) => {
  console.log("Sending info to the Featured Location page");
  res.send({ message: userData });
});
// export the express app we created to make it available to other modules
module.exports = app;
