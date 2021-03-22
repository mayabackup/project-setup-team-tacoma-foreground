import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './FeaturedLocations.css'; 
import img1 from "./img/spain.jpeg";
import img2 from "./img/paris.jpeg";
import img3 from "./img/turkey.jpeg";


const Featured = ({ props }) => {
 
    let FLocation1 = localStorage.getItem("FLocation1");
    let FLocation2 = localStorage.getItem("FLocation2");
    let FLocation3 = localStorage.getItem("FLocation3");
    let Fscore1 = localStorage.getItem("Fscore1");
    let Fscore2 = localStorage.getItem("Fscore2");
    let Fscore3 = localStorage.getItem("Fscore3");

    return (
        <div className="FeaturedCSS">
            <h1 className="FeaturedTitle">Featured Safest Locations</h1>
        <section className="Location1">
        <Carousel className="FCaoursel1" showArrows={false} isPLaying={true} width='50pc' autoPlay interval="5000" transitionTime="5000">
          <div>
            <img className='img-car' src={img2} />
            <p className="legend">Paris</p>
          </div>
          <div>
            <img className='img-car' src={img1} />
            <p className="legend">Spain</p>
          </div>
          <div>
            <img className='img-car' src={img3} />
            <p className="legend">Turkey</p>
          </div>
        </Carousel >
          <h3> Location1: <span className="FLocation1"> {FLocation1}</span></h3>
          <h3> Score: <span className="Fscore1"> {Fscore1}</span></h3>
        </section>

        <section classname="Location2">
        <Carousel className="FCaoursel2" showArrows={false} isPLaying={true} width='50pc' autoPlay interval="5000" transitionTime="5000">
          <div>
            <img className='img-car' src={img2} />
            <p className="legend">Paris</p>
          </div>
          <div>
            <img className='img-car' src={img1} />
            <p className="legend">Spain</p>
          </div>
          <div>
            <img className='img-car' src={img3} />
            <p className="legend">Turkey</p>
          </div>
        </Carousel>
        <h3> Location2: <span className="FLocation2"> {FLocation2}</span></h3>
        <h3> Score: <span className="Fscore2"> {Fscore2}</span></h3>
        </section>

        <section classname="Location3">
        <Carousel className="FCaoursel3" showArrows={false} isPLaying={true} width='50pc' autoPlay interval="5000" transitionTime="5000">
          <div>
            <img className='img-car' src={img2} />
            <p className="legend">Paris</p>
          </div>
          <div>
            <img className='img-car' src={img1} />
            <p className="legend">Spain</p>
          </div>
          <div>
            <img className='img-car' src={img3} />
            <p className="legend">Turkey</p>
          </div>
        </Carousel>
        <h3> Location3: <span className="FLocation3"> {FLocation3}</span></h3>
        <h3> Score: <span className="Fscore3"> {Fscore3}</span></h3>
        </section>
 </div>
 );
          
}

export default Featured;