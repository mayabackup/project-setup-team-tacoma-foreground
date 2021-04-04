// STAY AT HOME RESTRICTIONS LINK

const papa = require("papaparse");
const request = require("request");

let date = new Date(); // use date mod

function api() {
    
  
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
    date = (yyyy)+ (mm)+ (dd);
    // console.log(date);
}


const options = {/* options */};

const parseStream = papa.parse(papa.NODE_STREAM_INPUT, options);

const dataStream = request
    .get("https://raw.githubusercontent.com/OxCGRT/covid-policy-tracker/master/data/OxCGRT_latest.csv")
    .pipe(parseStream);

let data = [];
parseStream.on("data", chunk => {
    data.push(chunk);
});

let data3 = [];
dataStream.on("finish", () => {
    for(var i = 1; i < data.length; i++){
        if((data[i][5]== date) && (data[i][4]=="NAT_TOTAL")){
            var country = (data[i][0]);
            //console.log(country);
            var date = data[i][5];
            //console.log(date);
            var stayatHome = data[i][16];
            if(stayatHome==''){
                stayatHome='NaN';
            }
            //console.log(stayatHome);
            //console.log("\n");
            var dict = {
                "Stringency" : stayatHome
            };
            var obj = {};
            obj[country] = dict;
            data3.push(obj);
        }
    }
    //console.log(data3);
    data3;
});


function getStringency() {
    return data3;
}
  
  
  // export the express app we created to make it available to other modules
  
  // export the express app we created to make it available to other modules
  
module.exports = {
    getStringency:getStringency
    };