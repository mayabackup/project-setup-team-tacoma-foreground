// import and instantiate express
const express = require("express"); // CommonJS import style!
const app = express(); // instantiate an Express object
const axios = require("axios");
const covid = require("./covid.js");
const cron = require('node-cron');

// we will put some server logic here later...
app.get("/", (req, res) => {
  console.log("results" , covid.getCovid());
  res.send("Hello!");
  
});
app.post("/", (req, res) => {
  console.log("results" , covid.getCovid());
  res.send(covid.getCovid());
  
});

<<<<<<< Updated upstream
app.post("/toplocations", (req, res) => {
  
});
=======

app.get("/", async(req, res) => {
  //const airports=await api.airports()
 let air= await axios.get('https://raw.githubusercontent.com/mwgg/Airports/master/airports.json')
 //air=JSON.stringify(air.data)
 //air= JSON.parse(air.data)
  res.send({ message:air.data})
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
  res.redirect('/confirmation');
})


app.get('/confirmation',(req,res)=>{
  console.log("sending info to the confirmation page")
  res.send({message:userData})
})

//Get request for flight info
app.get('/flight_info',(req,res)=>{
  console.log("sending info to the Flight Information page")
  res.send({message:userData})
})

>>>>>>> Stashed changes

// export the express app we created to make it available to other modules
module.exports = app;