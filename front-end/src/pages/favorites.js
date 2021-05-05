/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/favorites.css";

function Favorites() {
  const [data, setData] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  const [location, setLocation] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const resp = await axios.get("http://localhost:5000/favorites");
      if (resp.data.error != null) {
        setError(resp.data.error);
      } else {
        const val = resp.data.message;
        console.log(val);
        const optionItems = Object.keys(resp.data.message).map(el => ({
          cases: resp.data.message[el].ranking.cases,
          vaccination: resp.data.message[el].ranking.vaccination,
          mortality: resp.data.message[el].ranking.mortality,
          overall: resp.data.message[el].ranking.overall,

          date: resp.data.message[el].date,
          total_cases: resp.data.message[el].total_cases,
          total_vaccinations: resp.data.message[el].total_vaccinations,
          new_vaccinations_smoothed_per_million:
            resp.data.message[el].new_vaccinations_smoothed_per_million,
          continent: resp.data.message[el].continent,
          location: resp.data.message[el].location,
          Workplace: resp.data.message[el].Workplace,
          Internal: resp.data.message[el].Internal,
          International: resp.data.message[el].International
        }));
        const updated = Object.keys(resp.data.update).map(el => ({
          cases: resp.data.message[el].ranking.cases,
          vaccination: resp.data.message[el].ranking.vaccination,
          mortality: resp.data.message[el].ranking.mortality,
          overall: resp.data.message[el].ranking.overall,

          date: resp.data.message[el].date,
          total_cases: resp.data.message[el].total_cases,
          total_vaccinations: resp.data.message[el].total_vaccinations,
          new_vaccinations_smoothed_per_million:
            resp.data.message[el].new_vaccinations_smoothed_per_million,
          continent: resp.data.message[el].continent,
          location: resp.data.message[el].location,
          Workplace: resp.data.message[el].Workplace,
          Internal: resp.data.message[el].Internal,
          International: resp.data.message[el].International
        }));
        setData(optionItems);
        setUpdatedData(updated);
      }
    };

    getItems();
  }, []);

  return (
    <div id="fav_locations">
      <div className="flex-container">
        <h1>Favorite Locations</h1>
        <div className="favorites">
          {error}
          <h2>Selected Countries</h2>
          {data.map(function(user, index) {
            return (
              <div>
                <div>
                  <div className="flex-container">
                    <h2>Covid Information</h2>
                    <div className="space_between">
                      <button id="ci_button">Location: {user.location}</button>
                    </div>
                    <div className="space_between">
                      <button id="ci_button">Date of Data: {user.date}</button>
                    </div>
                    <div className="space_between">
                      <h3>Total number of cases:</h3>
                      <button className="data">
                        <b>{user.total_cases} cases</b>
                      </button>
                    </div>
                    <div className="space_between">
                      <h3>Population Vaccinated:</h3>
                      <button className="data">
                        <b>{user.vaccination} %</b>
                      </button>
                    </div>
                    <div className="space_between">
                      <h3>Mortality risk:</h3>
                      <button className="data">
                        <b>{user.mortality} %</b>
                      </button>
                    </div>

                    <div className="space_between">
                      <h3>Overall Score:</h3>
                      <button className="data">
                        <b>{user.overall} %</b>
                      </button>
                    </div>

                    <div className="format_ci">
                      <h3> Workplace Closures:</h3>
                      <p className="p_left_ci">{user.Workplace}</p>
                    </div>
                    <div className="format_ci">
                      <h3> International Travel Control:</h3>
                      <p className="p_left_ci">{user.International}</p>
                    </div>
                    <div className="format_ci">
                      <h3> Internal Movement Restrictions:</h3>
                      <p className="p_left_ci">{user.Internal}</p>
                    </div>
                  </div>

                  <br></br>
                </div>
              </div>
            );
          })}
          <h2>Updated Information</h2>
          {updatedData.map(function(user, index) {
            return (
              <div>
                <div className="flex-container">
                  <h2>Covid Information</h2>
                  <div className="space_between">
                    <button id="ci_button">Location: {user.location}</button>
                  </div>
                  <div className="space_between">
                    <button id="ci_button">Date of Data: {user.date}</button>
                  </div>
                  <div className="space_between">
                    <h3>Total number of cases:</h3>
                    <button className="data">
                      <b>{user.total_cases} cases</b>
                    </button>
                  </div>
                  <div className="space_between">
                    <h3>Population Vaccinated:</h3>
                    <button className="data">
                      <b>{user.vaccination} %</b>
                    </button>
                  </div>
                  <div className="space_between">
                    <h3>Mortality risk:</h3>
                    <button className="data">
                      <b>{user.mortality} %</b>
                    </button>
                  </div>

                  <div className="space_between">
                    <h3>Overall Score:</h3>
                    <button className="data">
                      <b>{user.overall} %</b>
                    </button>
                  </div>

                  <div className="format_ci">
                    <h3> Workplace Closures:</h3>
                    <p className="p_left_ci">{user.Workplace}</p>
                  </div>
                  <div className="format_ci">
                    <h3> International Travel Control:</h3>
                    <p className="p_left_ci">{user.International}</p>
                  </div>
                  <div className="format_ci">
                    <h3> Internal Movement Restrictions:</h3>
                    <p className="p_left_ci">{user.Internal}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Favorites;
