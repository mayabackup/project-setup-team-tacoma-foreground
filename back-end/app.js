// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const api = require('./home_api');
const axios = require('axios');

cors = require("cors");
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
  res.send({ message:air.data})

})

app.post('/', (req,res)=>{
  console.log("entering", Object.keys(req.body))
  userData={
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
  console.log(userData)
  res.redirect('/confirmation');
})



// export the express app we created to make it available to other modules
module.exports = app