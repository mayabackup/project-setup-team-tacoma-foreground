// MORTALITY LINK

const papa = require("papaparse");
const request = require("request");

const options = {/* options */};

const parseStream = papa.parse(papa.NODE_STREAM_INPUT, options);

const dataStream = request
    .get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.csv")
    .pipe(parseStream);

let data = [];
parseStream.on("data", chunk => {
    data.push(chunk);
});

let data2 = [];
dataStream.on("finish", () => {
    for(var i = 1; i < data.length; i++){
        if((data[i][3]== "2021-03-20") 
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
            var obj = {};
            obj[location] = dict;
            //console.log(dict);
            data2.push(obj);
            //console.log("\n");
        }
    }
    // console.log(data2);
    data2;
});