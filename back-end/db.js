const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')

console.log(process.env.DB_NAME)
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.lll4h.mongodb.net/covid_travel_agent?retryWrites=true&w=majority`;



const user_data = new mongoose.Schema({
    // username provided by authentication plugin
    // password hash provided by authentication plugin
   // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    citizenship: { type: String, require: false },
    location: { type: String, require: false },
    airport: { type: String, require: false },
    continent: { type: String, require: false },
    reason: { type: String, require: false },
    email: { type: String, require: false },
    country_details: { type: mongoose.Schema.Types.ObjectId, ref: "country_details" }
  });

  const User = new mongoose.Schema({
    // username provided by authentication plugin
    // password hash provided by authentication plugin
    name: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
 
  });
  // eslint-disable-next-line no-unused-vars
  const country_details = new mongoose.Schema({
    // username provided by authentication plugin
    // password hash provided by authentication plugin
    date: { type: String, require: true },
    total_cases: { type: Number, require: true },
    total_deaths:{ type: Number, require: true },
    total_cases_per_million: { type: Number, require: true },
    total_vaccinations: { type: Number, require: true },
    new_vaccinations_smoothed_per_million: { type: Number, require: true },
    continent:  { type: String, require: true },
    location:  { type: String, require: true },
    ranking: {
      cases:  { type: Number, require: true },
      vaccination:  { type: Number, require: true },
      mortality: { type: Number, require: true },
      overall:  { type: Number, require: true },
    }
  });
  mongoose.model("user_data", user_data);
  mongoose.model("User", User);
  mongoose.model("country_details", User);
mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );


  