import React, { useEffect , useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './FeaturedLocations.css'; 
import axios from "axios";
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

  
  useEffect(()=>{
    const getItems = async() => {
        const results = await axios.get(
    "http://localhost:5000/FeaturedLocations"
    );

    if(results.data.message.FLocation1!=null) {
      setFLocation1(results.data.FLocation1);
    }
    else {
      setFLocation1("Please Enter Data");
    }

    if(results.data.message.FLocation2!=null) {
      setFLocation2(results.data.FLocation2);
    }
    else {
      setFLocation2("Please Enter Data");
    }

    if(results.data.message.FLocation3!=null) {
      setFLocation3(results.data.FLocation3);
    }
    else {
      setFLocation3("Please Enter Data");
    }

    if(results.data.message.Fscore1!=null) {
      setFscore1(results.data.Fscore1);
    }
    else {
      setFscore1("Please Enter Data");
    }
    
    if(results.data.message.Fscore2!=null) {
      setFscore1(results.data.Fscore2);
    }
    else {
      setFscore2("Please Enter Data");
    }
    
    if(results.data.message.Fscore3!=null) {
      setFscore3(results.data.Fscore1);
    }
    else {
      setFscore3("Please Enter Data");
    }

    if(results.data.message.covid1!=null) {
      setcovid1(results.data.covid1);
    }
    else {
      setcovid1("Please Enter Data");
    }
    
    if(results.data.message.covid2!=null) {
      setcovid2(results.data.covid2);
    }
    else {
      setcovid2("Please Enter Data");
    }

    if(results.data.message.covid3!=null) {
      setcovid3(results.data.covid3);
    }
    else {
      setcovid3("Please Enter Data");
    }
  }

  getItems();
  },[])
 
    return (
        <div className="FeaturedCSS">
            <h1 className="FeaturedTitle">Featured Safest Locations</h1>
        <section className="Location1">
        <Carousel className="FCaoursel1" showArrows={false} isPLaying={true} width='50pc' autoPlay interval="5000" transitionTime="5000">
          <div>
            <img className='img-car' src={ "https://picsum.photos/300/200?random=1"} />
          </div>
          <div>
            <img className='img-car' src={"https://picsum.photos/300/200?random=2"} />
          </div>
          <div>
            <img className='img-car' src={"https://picsum.photos/300/200?random=3"} />
          </div>
        </Carousel >
          <h3> Location 1: <span className="FLocation1"> {FLocation1}</span></h3>
          <h3> Score: <span className="Fscore1"> {Fscore1}</span></h3>
          <h3> Number of Covid Cases: <span className="Fscore1"> {covid1}</span></h3>
        </section>

        <section classname="Location2">
        <Carousel className="FCaoursel2" showArrows={false} isPLaying={true} width='50pc' autoPlay interval="5000" transitionTime="5000">
          <div>
            <img className='img-car' src={"https://picsum.photos/300/200?random=4"} />
          </div>
          <div>
            <img className='img-car' src={"https://picsum.photos/300/200?random=5"} />
          </div>
          <div>
            <img className='img-car' src={"https://picsum.photos/300/200?random=6"} />
          </div>
        </Carousel>
        <h3> Location 2: <span className="FLocation2"> {FLocation2}</span></h3>
        <h3> Score: <span className="Fscore2"> {Fscore2}</span></h3>
        <h3> Number of Covid Cases: <span className="Fscore2"> {covid2}</span></h3>
        </section>

        <section classname="Location3">
        <Carousel className="FCaoursel3" showArrows={false} isPLaying={true} width='50pc' autoPlay interval="5000" transitionTime="5000">
          <div>
            <img className='img-car' src={"https://picsum.photos/300/200?random=7"} />
          </div>
          <div>
            <img className='img-car' src={"https://picsum.photos/300/200?random=8"} />
          </div>
          <div>
            <img className='img-car' src={"https://picsum.photos/300/200?random=9"} />
          </div>
        </Carousel>
        <h3> Location 3: <span className="FLocation3"> {FLocation3}</span></h3>
        <h3> Score: <span className="Fscore3"> {Fscore3}</span></h3>
        <h3> Number of Covid Cases: <span className="Fscore3"> {covid3}</span></h3>
        </section>
 </div>
 );
          
}

export default Featured;
