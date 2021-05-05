import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/FeaturedLocations.css";
import axios from "axios";
import { findFlagUrlByCountryName } from "country-flags-svg";

const Featured = ({ props }) => {
  let [FLocation1, setFLocation1] = useState();
  let [FLocation2, setFLocation2] = useState();
  let [FLocation3, setFLocation3] = useState();

  let [Fscore1, setFscore1] = useState();
  let [Fscore2, setFscore2] = useState();
  let [Fscore3, setFscore3] = useState();

  let [covid1, setcovid1] = useState();
  let [covid2, setcovid2] = useState();
  let [covid3, setcovid3] = useState();

  let [image1, setImage1] = useState();
  let [image2, setImage2] = useState();
  let [image3, setImage3] = useState();

  useEffect(() => {
    const getItems = async () => {
      const resp = await axios.get("http://104.131.7.104:5000/FeaturedLocations");

      setFLocation1(resp.data.message[0].location);
      setFLocation2(resp.data.message[1].location);
      setFLocation3(resp.data.message[2].location);

      setFscore1(resp.data.message[0].ranking.overall);
      setFscore2(resp.data.message[1].ranking.overall);
      setFscore3(resp.data.message[2].ranking.overall);

      setcovid1(resp.data.message[0].data.total_cases);
      setcovid2(resp.data.message[1].data.total_cases);
      setcovid3(resp.data.message[2].data.total_cases);
      setImage1(findFlagUrlByCountryName(resp.data.message[0].location));
      setImage2(findFlagUrlByCountryName(resp.data.message[1].location));
      setImage3(findFlagUrlByCountryName(resp.data.message[2].location));
    };
    getItems();
  }, []);

  return (
    <div className="FeaturedCSS">
      <h1 className="FeaturedTitle">Featured Safest Locations</h1>
      <section className="Location1">
        <Carousel
          className="FCaoursel1"
          showArrows={false}
          isPLaying={true}
          width="50pc"
          autoPlay
          interval="5000"
          transitionTime="5000"
        >
          <div>
            <img className="img-car" src={image1} alt="country flag" />
            <h3>
              {" "}
              Location 1: <span className="FLocation1"> {FLocation1}</span>
            </h3>
            <h3>
              {" "}
              Score: <span className="Fscore1"> {Fscore1}</span>
            </h3>
            <h3>
              {" "}
              Number of Covid Cases: <span className="Fscore1"> {covid1}</span>
            </h3>
          </div>
          <div>
            <img className="img-car" src={image2} alt="country flag" />
            <h3>
              {" "}
              Location 2: <span className="FLocation2"> {FLocation2}</span>
            </h3>
            <h3>
              {" "}
              Score: <span className="Fscore2"> {Fscore2}</span>
            </h3>
            <h3>
              {" "}
              Number of Covid Cases: <span className="Fscore2"> {covid2}</span>
            </h3>
          </div>
          <div>
            <img className="img-car" src={image3} alt="country flag" />
            <h3>
              {" "}
              Location 3: <span className="FLocation3"> {FLocation3}</span>
            </h3>
            <h3>
              {" "}
              Score: <span className="Fscore3"> {Fscore3}</span>
            </h3>
            <h3>
              {" "}
              Number of Covid Cases: <span className="Fscore3"> {covid3}</span>
            </h3>
          </div>
        </Carousel>
      </section>

      <section classname="Location2">
        <Carousel
          className="FCaoursel2"
          showArrows={false}
          isPLaying={true}
          width="50pc"
          autoPlay
          interval="5000"
          transitionTime="5000"
        ></Carousel>
      </section>

      <section classname="Location3">
        <Carousel
          className="FCaoursel3"
          showArrows={false}
          isPLaying={true}
          width="50pc"
          autoPlay
          interval="5000"
          transitionTime="5000"
        ></Carousel>
      </section>
    </div>
  );
};

export default Featured;
