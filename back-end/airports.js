
const axios = require("axios");
const fs = require('fs');

async function getAirports(){
    let air= await axios.get('https://raw.githubusercontent.com/mwgg/Airports/master/airports.json')
    fs.writeFile("airports.json", JSON.stringify(air.data), function(err) {   
        if (err) {
            console.log(err);
        }
    })
}

module.exports={
    getAirports:getAirports
}
