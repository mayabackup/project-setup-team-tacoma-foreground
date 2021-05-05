/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect } from "react";
import "./css/home.css";
import { useHistory } from "react-router-dom";
import axios from "axios/lib/axios";

const HomePage = ({ props }) => {

  //states
  const [continent, setContinent] = useState(null);
  const [data, setData] = useState();
  let history = useHistory();

  //after submit--> prevent defualt and go to confirmation page
  const handleSubmit = evt => {
    evt.preventDefault();

    localStorage.setItem("continent", continent);

    history.push("/confirmation");
    let formData = {
      //advanced
      continent,
    };
    const post = async () =>
      await axios
        .post("http://localhost:5000/", formData)
        .then(() => console.log("Sent form data"))
        .catch(err => {
          console.error(err);
        });
    post();
  };

  useEffect(() => {
    const getItems = async () => {
      const resp = await axios.get("http://localhost:5000/");
      if (
        resp.data.user === null ||
        typeof resp.data.user === "undefined" ||
        resp.data.user === ""
      ) {
        setData(
          <div>
            <a href="./signup" target="_blank">
              Sign Up{" "}
            </a>{" "}
            <a>or </a>
            <a href="./login" target="_blank">
              Login{" "}
            </a>
            <a> to save your results!</a>
          </div>
        );
      } else {
        setData(
          <div>
            <a href="./logout" target="_blank">
              Logout{" "}
            </a>
            <a>!</a>
          </div>
        );
      }
    };
    getItems();
  }, []);

  //initial return with iframe and forms
  return (
    <div class="HomeCSS">
      <h1>Welcome to the Covid Travel Agent </h1>
      <div>
        <iframe
          title="covid-map"
          ondblclick="window.location='http://www.google.com'"
          src="https://public.domo.com/cards/bWxVg"
          width="100%"
          height="600"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
        ></iframe>
      </div>
      <div>
        <form className="inputs" onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                className="input-field"
                name="continent"
                type="text"
                placeholder="Enter desired continent"
                value={continent}
                onChange={e => setContinent(e.target.value)}
              />
            </label>
          </div>
          <br></br>
          <input className="input-field" type="submit" value="CALCULATE" />
          {data}
          <br></br>
          <br></br>
        
          <br></br>
          <br></br>
        </form>
      </div>
      <div></div>
    </div>
  );
};
export default HomePage;
