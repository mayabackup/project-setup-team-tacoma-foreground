// MORTALITY LINK
const papa = require("papaparse");
const request = require("request");


let date = new Date();
let data2 = [];
var obj = {};
function api() {
    //console.log("entering the death rate")
    // use date mod
  
    // let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth(); // is actually last month not today's month !
    let yyyy = date.getFullYear();
    // console.log("entering");
  
    if (dd < 10) {
      dd = "0" + dd;
    }
  
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = yyyy + "-" + mm + "-" + (dd);
    // console.log(date);

const options = {/* options */};

const parseStream = papa.parse(papa.NODE_STREAM_INPUT, options);

const dataStream = request
    .get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.csv")
    .pipe(parseStream);
let data = [];
parseStream.on("data", chunk => {
    data.push(chunk);
});

dataStream.on("finish", () => {
    
    for(var i = 1; i < data.length; i++){
        if((data[i][3]== date)  // used to be "2021-03-20"
        && (data[i][2] != 'World')
        && (data[i][2] != 'North America')
        && (data[i][2] != 'International')
        && (data[i][2] != 'European Union')
        && (data[i][2] != 'Africa')
        && (data[i][2] != 'Asia')){
            // prints location:
            var location = data[i][2];
            //console.log(data[i][2]);
            // prints new cases:
            var newCases = data[i][5];
            //console.log(data[i][5]);
            // prints new deaths:
            var newDeaths = data[i][8];
            //console.log(data[i][8]);
            // calculates & prints mortality rate:
            var deathrate = (newDeaths / newCases) *100;
            deathrate = deathrate.toFixed(2);
            //console.log(deathrate);
            //console.log("\n");
            var dict = {
                "Death_Rate" : deathrate
            };
            
            obj[location] = dict;
            //console.log(dict);
            data2.push(obj);
 
        }
    }
    // console.log(data2);
    data2;
    //console.log(obj)
});
}


function getdeath() {
    return obj;
  }
  
  
  // export the express app we created to make it available to other modules
  
  // export the express app we created to make it available to other modules
  
  module.exports = {
    getdeath: getdeath,
    api:api
  };
  