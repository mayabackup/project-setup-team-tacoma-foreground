const cron = require("node-cron");
const covid = require('./covid.js');

let algo_data = {};
let overall = 0;
let cases = 0, max_cases = 0;
let vaccination = 0, max_vaccination = 0;
let mortality = 0, max_mortality = 0;
let ranking = {overall, cases, vaccination, mortality};
/*
Cron scheduler, runs every day at 8pm EST.
API funuction retrieves master covid data and returns.
*/
const task = cron.schedule("5 * * * *", function() {
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
    console.log('algorithm function started...');
    algo_data = covid.combineData();

    // add ranking
    for (var country in algo_data) {
      if (algo_data[country].hasOwnProperty('data')) {
        algo_data[country].ranking = ranking; 
      } else {
        delete algo_data[country];
      }
    }

    // calculate max
    for (var country in algo_data) {
      if (algo_data[country].data.total_cases_per_million > max_cases) {
        max_cases = algo_data[country].data.total_cases_per_million;
      }
      if (algo_data[country].data.total_vaccinations_per_hundred > max_vaccination) {
        max_vaccination = algo_data[country].data.total_vaccinations_per_hundred;
      }
      if (algo_data[country].data.total_deaths_per_million > max_mortality) {
        max_mortality = algo_data[country].data.total_deaths_per_million;
      }
    }

    // calculate rank
    for (var country in algo_data) {
      algo_data[country].ranking.cases = 100 - ( (algo_data[country].data.total_cases_per_million / max_cases) * 100 );
      algo_data[country].ranking.vaccination = (algo_data[country].data.total_vaccinations_per_hundred / max_vaccination) * 100;
      algo_data[country].ranking.mortality = 100 - ( (algo_data[country].data.total_deaths_per_million / max_mortality) * 100 );
    }
  

    console.log(algo_data);
    console.log(max_cases, max_vaccination, max_mortality);

    //check JSON keys
    if (algo_data['Zimbabwe'].hasOwnProperty('data')) {
      console.log('yeah boi');
    } else {
      console.log('nah bro');
    }

    //check JSON values
    if (isNaN(algo_data['Zimbabwe'].data.total_vaccinations_per_hundred)) {
      console.log('not a number');
    } else {
      console.log('a number');
    }
    console.log(algo_data['Zimbabwe'].data.total_vaccinations_per_hundred);
    console.log((algo_data['Zimbabwe'].ranking.cases));

    return algo_data;
    }

module.exports = {
    algorithm: algorithm
}