import axios from "axios";

var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/referral/v1.0/england/gbp/%7Blocale%7D/%7Boriginplace%7D/%7Bdestinationplace%7D/%7Boutboundpartialdate%7D/%7Binboundpartialdate%7D',
  params: {shortapikey: 'ra66933236979928', apiKey: '{shortapikey}'},
  headers: {
    'x-rapidapi-key': '145535603dmshc477078d17e46e4p1446a5jsn8a6f9d95819b',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});