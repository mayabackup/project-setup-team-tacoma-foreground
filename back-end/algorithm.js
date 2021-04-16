const fs = require("fs");
const cron = require("node-cron");

let max_cases = 0;
let max_vaccination = 0;
let max_mortality = 0;
let dataArray = {};
/*
Cron scheduler, runs every day at 8pm EST.
API funuction retrieves master covid data and returns.
*/
const task = cron.schedule(
  "30 8 * * *",
  function() {
    console.log("algorithm.js cron started...");
    algorithm();
  },
  {
    scheduled: true
  }
);
// Start task cron
task.start();

function algorithm() {
  console.log("algorithm function started...");

  fs.readFile("./combine.json", "utf8", (err, algo_data) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    algo_data = JSON.parse(algo_data);
    // add ranking
   // console.log(algo_data)
    for (let country in algo_data) {
      if (!("data" in algo_data[country])) {
        //console.log("delting ", algo_data[country]);
        delete algo_data[country];

        //algo_data[country].ranking = ranking;
      } 
    }

    // calculate max
    for (var country in algo_data) {
      if (algo_data[country].data.total_cases_per_million > max_cases) {
        max_cases = algo_data[country].data.total_cases_per_million;
      }
      if (
        algo_data[country].data.total_vaccinations_per_hundred > max_vaccination
      ) {
        max_vaccination =
          algo_data[country].data.total_vaccinations_per_hundred;
      }
      if (algo_data[country].data.total_deaths_per_million > max_mortality) {
        max_mortality = algo_data[country].data.total_deaths_per_million;
      }
    }

    // calculate rank
    for (let country in algo_data) {
      //console.log("entering the ranK", country)
      algo_data[country].ranking = {};
      algo_data[country].ranking.cases =
        100 -
        (algo_data[country].data.total_cases_per_million /
          parseFloat(max_cases)) *
          100;
      //console.log(algo_data[country].ranking.cases )
      if (
        typeof algo_data[country].data.total_vaccinations_per_hundred !==
          "undefined" &&
        algo_data[country].data.total_vaccinations_per_hundred !== null
      ) {
        // console.log("undef",(algo_data[country].data.total_vaccinations_per_hundred / parseFloat(max_vaccination)) * 100)
        algo_data[country].ranking.vaccination =
          (algo_data[country].data.total_vaccinations_per_hundred /
            parseFloat(max_vaccination)) *
          100;
      } else {
        //console.log("NOT")
        algo_data[country].ranking.vaccination = 0;
      }
      algo_data[country].ranking.mortality =
        100 -
        (algo_data[country].data.total_deaths_per_million /
          parseFloat(max_mortality)) *
          100;
      algo_data[country].ranking.overall =
        (parseFloat(algo_data[country].ranking.mortality) +
        parseFloat(algo_data[country].ranking.vaccination) +
        parseFloat(algo_data[country].ranking.cases)) / 3;

      //console.log(algo_data)
    } //console.log(algo_data)
    //console.log(algo_data)
    //console.log(max_cases, max_vaccination, max_mortality);

    //check JSON keys
    //if (algo_data['Zimbabwe'].hasOwnProperty('data')) {
    //console.log('yeah boi');
    //} else {
    //console.log('nah bro');
    //}
    //console.log(algo_data)
    //check JSON values
    if (isNaN(algo_data["Zimbabwe"].data.total_vaccinations_per_hundred)) {
      //console.log('not a number');
    } else {
      //console.log('a number');
    }

    //console.log((algo_data['Zimbabwe'].ranking.cases));
    
    // remove countries lacking vital data
    for (let x in algo_data) {
      if (isNaN(algo_data[x].ranking.cases) || algo_data[x].ranking.cases == null || algo_data[x].ranking.cases == 0) {
        delete algo_data[x];
      }
      else if (isNaN(algo_data[x].ranking.vaccination) || algo_data[x].ranking.vaccination == null || algo_data[x].ranking.vaccination == 0) {
        delete algo_data[x];
      }
      else if (isNaN(algo_data[x].ranking.mortality) || algo_data[x].ranking.mortality == null || algo_data[x].ranking.mortality == 0) {
        delete algo_data[x];
      }
    }
    const json = Object.values(algo_data);
    const result = json.sort(function(a, b) {
      return b.ranking.overall - a.ranking.overall;
    });
    // result.forEach(e => console.log(e))
    for (let x in result) {
      // console.log(Object.keys(result[x]))
      let res = {};
      res[result[x].location] = result[x];
      //console.log(res)
      let loc = result[x].location;
      dataArray[loc] = result[x];
    }
  console.log(dataArray);
   
  });
  return dataArray;
}



module.exports = {
  algorithm: algorithm
};
