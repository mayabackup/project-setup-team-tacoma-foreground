const axios = require("axios");
const cron = require("node-cron");
/*
Cron scheduler, runs every day at 4pm EST.
API funuction retrieves master covid data and returns.
*/
const task = cron.schedule("7 20 * * *", function() {
    api();
    console.log("Running a job at 08:00 pm at NYC EST timezone");
  },
  {
    scheduled: true
  }
);
// Start task cron
task.start();


// RESULT WILL HOLD MASTER COVID DATA
let result = {};

// retrieves MAST COVID DATA 
function api() {
  // use date mod

  let today = new Date();
  let dd = today.getDate() - 1;
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  console.log("entering");

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;
  console.log(today);

  // sxios to retrieve online data
  axios
    .get("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(response => {
      const v = CircularJSON.stringify(response);
      const data = JSON.parse(v);
      const filtered = JSON.parse(JSON.stringify(data["data"]));
      for (let x in filtered) {
        const country = JSON.parse(JSON.stringify(data["data"][x]));
        const filt = country.data.filter(function(entry) {
        const date = new Date(entry.date);
        const date1 = new Date(today);
        if (date.getTime() === date1.getTime()) return entry;
        });

        result[country.location] = {
          data: filt[0],
          continent: country.continent,
          location: country.location
        };
      }

      console.log("lisenting");
      console.log(result);
      return result;
    })
    .catch(error => {
      console.error(error);
<<<<<<< Updated upstream
=======
      console.log("ERROR api")
>>>>>>> Stashed changes
    });
}
//getter func for MASTER COVID data
function getCovid() {
  return result;
}
// export the express app we created to make it available to other modules

module.exports = {
  api: api,
  getCovid: getCovid
};
<<<<<<< Updated upstream
=======


//Code for WebScraping Internal and International Movement Controls:

const csv=require('csv-parser');
const fs = require('fs');
const { Console } = require("console");

const resultWeb = {};

// retrieves MAST COVID DATA 
function api2() {
  // use date mod

  let today = new Date();
  let dd = today.getDate() - 1;
  //NOTE: this will get last month's Date because government policies are not updated frequently.
  let mm = today.getMonth();
  let yyyy = today.getFullYear();
  console.log("entering");

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }
  lastMonth = yyyy + mm + dd;
  console.log(lastMonth);

  // axios to retrieve online data
  axios
    .get("https://raw.githubusercontent.com/OxCGRT/covid-policy-tracker/master/data/OxCGRT_latest.csv")
    .then(response => {
      const csv1=response.data
      fs.writeFile('response.csv', csv1, function(err){
        console.log(err);
    });

   const filepath='./response.csv'
   fs.createReadStream(filepath).on('error', ()=>{})
  .pipe(csv())
  .on('data', (row) => {
    if(row["Date"]==lastMonth){
      
      resultWeb[row["CountryName"]] = {
        Workplace: row["C2_Workplace closing"],
        Internal: row["C7_Restrictions on internal movement"],
        International: row["C8_International travel controls"]
      };
    }
  })
  .on('end', () => {
    console.log("Parsed through CSV File");
    
   // console.log(resultWeb)

  });
      return resultWeb;
    })
    .catch(error => {
      console.error(error);
    });

    //you must delete response.csv file after reading it
    fs.unlinkSync('./response.csv');

}
//getter func for MASTER COVID data
function getWebScrape() {
  return resultWeb;
}
// export the express app we created to make it available to other modules

module.exports = {
  api2: api2,
  getWebScrape: getWebScrape
};
>>>>>>> Stashed changes
