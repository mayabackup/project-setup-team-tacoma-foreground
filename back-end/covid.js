const getdeath = require('./deathrate');
const getStringency = require('./stringency');

const axios = require("axios");
const cron = require("node-cron");
const csv=require('csv-parser');
const fs = require('fs');

/*
Cron scheduler, runs every day at 8pm EST.
API funuction retrieves master covid data and returns.
*/
const task = cron.schedule("2 * * * *", function() {
    api();
    api2();
    getdeath.api();
    getStringency.api();
    console.log("Running a job at 08:07 pm at NYC EST timezone");
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
  today = yyyy + "-" + mm + "-" + (dd);
  console.log(today);

  // sxios to retrieve online data
  axios
    .get("https://covid.ourworldindata.org/data/owid-covid-data.json")
    .then(response => {
      const v = JSON.stringify(response.data);
      const filtered = JSON.parse(v);
      //console.log(data)
      //const filtered = JSON.parse(JSON.stringify(data["data"]));
      for (let x in filtered) {
       // console.log("the x value" , x,filtered[x])
        const country = JSON.parse(JSON.stringify(filtered[x]['data']));
        //console.log(country)
        const filt = country.filter(function(entry) {
         // console.log('the entry ', entry)
        const date = new Date(entry.date);
        const date1 = new Date(today);

        if (date.getTime() == date1.getTime()){
          return entry;
        } 
        });

        result[filtered[x].location] = {
          data: filt[0],
          continent: filtered[x].continent,
          location: filtered[x].location
        };
      }
      combineData()
      //console.log(result);
      return result;
    })
    .catch(error => {
      console.error(error);
      console.log("ERROR api1")
    });
}
//getter func for MASTER COVID data
function getCovid() {
  return result;
}


//Code for WebScraping Internal and International Movement Controls:

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
    
    //console.log(resultWeb)

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

function combineData(){
  const covid=getCovid()
  const web=  getWebScrape()
  const stringency= getStringency.getStringency()
  const death= getdeath.getdeath()

  const arrayOfData={...covid, ...web}

    for(key in covid){
       if(web[key] && stringency[key] && death[key]){
         const combined={...covid[key], ...web[key], ...death[key],...stringency[key]} 
         covid[key] = combined
        delete web[key];
        delete death[key];
        delete stringency[key];
       }
       else if(web[key] && stringency[key]){
        const combined={...covid[key], ...web[key],...stringency[key]} 
        covid[key] = combined
       delete web[key];
       delete stringency[key];
   
       }
       else if(web[key] && death[key]){
        const combined={...covid[key], ...web[key],...stringency[key]} 
        covid[key] = combined
       delete web[key];
       delete death[key];
   
       }
       else if(stringency[key] && death[key]){
        const combined={...covid[key], ...death[key],...stringency[key]} 
        covid[key] = combined
       delete death[key];
       delete stringency[key];
   
       }
       else if(death[key]){
        const combined={...covid[key], ...death[key]} 
        covid[key] = combined
       delete death[key];
   
       }
       else if(stringency[key]){
        const combined={...covid[key], ...stringency[key]} 
        covid[key] = combined
       delete stringency[key];
   
       }
       else if(web[key]){
        const combined={...covid[key], ...web[key]} 
        covid[key] = combined
       delete web[key];
   
       }      
    }
    const allData={...covid, ...web,...death,...stringency}
    return allData;
}

// export the express app we created to make it available to other modules

module.exports = {
  api: api,
  getCovid: getCovid,
  api2: api2,
  getWebScrape: getWebScrape,
  combineData:combineData
};
