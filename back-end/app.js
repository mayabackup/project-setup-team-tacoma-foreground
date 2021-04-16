// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const api = require('./home_api');
const axios = require('axios');
const api2=require('./covid.js');
const dataBase=require('./db.js')
const mongoose = require("mongoose");

const User_data = mongoose.model("user_data");
const User = mongoose.model("User");

cors = require("cors");

console.log(dataBase)
//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);
// middleware to get req body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require("path");
const { airports } = require("./home_api");
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
  if(req.get('Host')) {
     next();
  } else {
    res.status(400).send('invalid request... add a host header plz');
  }
});

app.use(logger);
// we will put some server logic here later...


app.get("/", async(req, res) => {
  //const airports=await api.airports()
 let air= await axios.get('https://raw.githubusercontent.com/mwgg/Airports/master/airports.json')
 //air=JSON.stringify(air.data)
 //air= JSON.parse(air.data)
  res.send({ status:'success', message:air.data})
  userData={
    citizenship:null,
    location:null,
    airport:null,

    //advanced; may be null
    advanced: null,
    continent: null,
    reason: null,
    name:null,
    email: null,
     
  }

})

app.post('/', (req,res)=>{
  userData={
    // do error checkings
    citizenship:req.body.citizenship,
    location: req.body.location,
    airport:req.body.airport.selectedOption.value,

    //advanced; may be null
    advanced: req.body.advanced,
    continent: req.body.continent,
    reason: req.body.reason,
    name:req.body.name,
    email: req.body.email,
     
  }
  const newQuery= new User_data({
    name: req.body.citizenship,
    location: req.body.location,
    airport: req.body.airport.selectedOption.value,
    continent: req.body.continent,
    reason: req.body.reason,
    email: req.body.email
  })

  newFlight.save(err => {
    console.log("the error " + err);
    res.redirect("/confirmation");
  });
  //res.redirect('/confirmation');
})


app.get('/confirmation',(req,res)=>{
  console.log("sending info to the confirmation page", )
  res.send({status:'success', message:userData})
})

//Get request for flight info
app.get('/flight_info',(req,res)=>{
  console.log("sending info to the Flight Information page")
  // res.send({message:userData})
})

app.get('/covid_info',(req,res)=>{
  console.log("sending info to the covid_info page")
  // res.send({message:userData})  
})

app.get('/Featured Locations', (req,res)=>{
  console.log("Sending info to the Featured Location page")
  res.send({message:userData})
})
// export the express app we created to make it available to other modules
module.exports = app;
