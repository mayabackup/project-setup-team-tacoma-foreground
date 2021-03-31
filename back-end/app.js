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

app.post("/toplocations", (req, res) => {
  
});

// export the express app we created to make it available to other modules
module.exports = app;