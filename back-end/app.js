// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const axios = require('axios')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var today = new Date();
var dd = today.getDate()-1;
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;
console.log(today)
const result={};
axios
	.get('https://covid.ourworldindata.org/data/owid-covid-data.json')
	.then((response) => {
        const dom = new jsdom.JSDOM(response)
        //const data=JSON.parse(response);
       // const v=dom.window.document.querySelectorAll("section")

        const v=JSON.stringify(response);
       //console.log(v);
   
        const data=JSON.parse(v);
        const cont=JSON.parse(JSON.stringify(data['data']['ZWE']));
       const filtered= JSON.parse(JSON.stringify(data['data']))
       const values=[]
        for (x in filtered){
           const country= JSON.parse(JSON.stringify(data['data'][x]))
            const filt=(country.data.filter(function (entry){
               const date=new Date(entry.date);
               const date1=new Date(today);
               //console.log(entry.date)
               if (date.getTime()===date1.getTime())
                   return entry
           }))
          
           result[x]=filt[0];
           //console.log(result)
           //values.push(result)

            

        }
        console.log(result)
	})
	.catch((error) => {
		console.error(error)
	});
// we will put some server logic here later...
app.get("/", (req, res) => {
    res.send("Hello!", req)
    console.log("lisenting")
  })

// export the express app we created to make it available to other modules
module.exports = app