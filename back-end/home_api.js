const axios = require('axios');

let airportJSON;

function airports(){

    axios.get('https://raw.githubusercontent.com/mwgg/Airports/master/airports.json')
    .then(response => {
   // console.log(response.data);
    //console.log(response.data.explanation);
    airportJSON=response.data;
    })
    .catch(error => {
    console.log(error);
    });
}

airports()

function getAirports(){
    return airportJSON
}
module.exports ={
 airports:airports,
 getAirports:getAirports

} 