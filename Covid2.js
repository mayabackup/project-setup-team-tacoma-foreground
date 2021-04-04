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
      const v = JSON.stringify(response);
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
    });
}
//getter func for MASTER COVID data
function getCovid() {
  return result;
}
// export the express app we created to make it available to other modules


const Web = {};

// retrieves MAST COVID DATA 
function api3() {
  

  let today = new Date();
  let day = today.getDate() - 1;
  
  let month = today.getMonth();
  let year = today.getFullYear();
  console.log("entering data");

  if (day < 30) {
    day = "0" + day;
  }

  if (month < 1) {
    month = "0" + month;
  }
  previousMonth = year + month + day;
  console.log(previousMonth);

  
  axios
    .get("https://raw.githubusercontent.com/OxCGRT/covid-policy-tracker/master/data/OxCGRT_latest.csv")
    .then(response => {
      const my_file=response.data
      fs.writeFile('result.csv', my_file, function(err){
        console.log(err);
    });

   const myfilepath='./result.csv'
   fs.createReadStream(myfilepath).on('error', ()=>{})
  .pipe(csv())
  .on('data', (row) => {
    if(row["Date"]==previousMonth){
      
      resultWeb[row["CountryName"]] = {
        Workplace: row["C1_School closing"],
        StayHome: row["C6_Stay at home requirements"]
        
      };
    }
  })
  .on('end', () => {
    console.log("Traversing CSV File");
    
    console.log(Web)

  });
      return Web;
    })
    .catch(error => {
      console.error(error);
    });

    
    fs.unlinkSync('./result.csv');

}
function getScraper() {
  return Web;
}
module.exports = {
  api: api,
  getCovid: getCovid,
  api2: api2,
  getWebScrape: getWebScrape,
  api3: api3,
  getScraper: getScraper
};
