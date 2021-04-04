// STAY AT HOME RESTRICTIONS LINK

const papa = require("papaparse");
const request = require("request");

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
        if((data[i][5]== "20210320") && (data[i][4]=="NAT_TOTAL")){
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

