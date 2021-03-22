import React, { useEffect , useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './FeaturedLocations.css'; 
import img1 from "./img/spain.jpeg";
import img2 from "./img/paris.jpeg";
import img3 from "./img/turkey.jpeg";
import axios from "axios";

    const Mockaroo = require('mockaroo');

    const client = new Mockaroo.Client({
      apiKey: 'ad35b1f0' // see http://mockaroo.com/api/docs to get your api key
    })
const Featured = ({ props }) => {
  let [FLocation1, setFLocation1] = useState([]);
  let [FLocation2, setFLocation2] = useState([]);
  let [FLocation3, setFLocation3] = useState([]);
  
  let [Fscore1, setFscore1] = useState([]);
  let [Fscore2, setFscore2] = useState([]);
  let [Fscore3, setFscore3] = useState([]);

  let [covid1, setcovid1] = useState([]);
  let [covid2, setcovid2] = useState([]);
  let [covid3, setcovid3] = useState([]);

    useEffect(()=>{
      async function fetchData() {
        const results = await axios.get(
          // retrieving some mock data about animals for sale
          "https://api.mockaroo.com/api/819cf460?count=1000&key=ad35b1f0"
        );
        console.log(results.data[0])
        setFLocation1(results.data[0].country)
        setFLocation2(results.data[1].country)
        setFLocation3(results.data[2].country)
        setFscore1(results.data[0].score)
        setFscore2(results.data[1].score)
        setFscore3(results.data[2].score)
        setcovid1(results.data[0].covid)
        setcovid2(results.data[1].covid)
        setcovid3(results.data[2].covid)
      }
      fetchData();
    },[])
 
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
          <h3> Location 1: <span className="FLocation1"> {FLocation1}</span></h3>
          <h3> Score: <span className="Fscore1"> {Fscore1}</span></h3>
          <h3> Number of Covid Cases: <span className="Fscore1"> {covid1}</span></h3>
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
        <h3> Location 2: <span className="FLocation2"> {FLocation2}</span></h3>
        <h3> Score: <span className="Fscore2"> {Fscore2}</span></h3>
        <h3> Number of Covid Cases: <span className="Fscore2"> {covid2}</span></h3>
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
        <h3> Location 3: <span className="FLocation3"> {FLocation3}</span></h3>
        <h3> Score: <span className="Fscore3"> {Fscore3}</span></h3>
        <h3> Number of Covid Cases: <span className="Fscore2"> {covid3}</span></h3>
        </section>
 </div>
 );
          
}

export default Featured;