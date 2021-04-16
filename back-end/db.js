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
    citizenship: { type: String, require: false },
    location: { type: String, require: false },
    airport: { type: String, require: false },
    continent: { type: String, require: false },
    reason: { type: String, require: false },
    email: { type: String, require: false }
  });

  const User = new mongoose.Schema({
    // username provided by authentication plugin
    // password hash provided by authentication plugin
    name: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
 
  });
  mongoose.model("user_data", user_data);
  mongoose.model("User", User);
mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );


  