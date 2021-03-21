import React from 'react';
 
import {useState, useEffect} from "react"
import './aboutus.css';
 
import { useHistory } from "react-router-dom"; 
import Carousel from 'react-bootstrap/Carousel' 

const AboutUs=({props})=>{
    return(
        <div >
            <h1 className='title'>About Us</h1>


            <Carousel className='carousel-inner'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.britannica.com/36/4336-050-056AC114/Flag-Spain.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.worldnomads.com/travel-safety/turkey/golden-horn-istanbul-turkey-gettyimages-1056463090.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="data:image/jpeg;base64,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"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br></br>
    <div className='purpose'>
        <h2>Our Purpose and philosophy</h2>
        <p>The COVID Travel Agent app is designed to provide prospective travelers with the most relevant knowledge to help them make a well-informed decision on international travel during the COVID pandemic. Particularly, the app aims at creating a personalized, comprehensive list of safest travel destinations based on the user's inputs (e.g. location, citizenship etc.), allowing the user to choose the most suitable destination for travel.</p>
        <p>COVID Travel Agent app collects and presents the relevant COVID and travel data that travelers, on their own, can usually gather only after a significant amount of research. This is due to the fact that the list of search outcomes (list of safest countries) is based on intersection of a diverse set of non-related user inputs (location, citizenship etc. )- it is usually difficult to find data for a particular intersection.</p>
    </div>
    <br></br>
    <h2>About us in the Media:</h2>
    <br></br>
    <div className="media"> 

        <iframe width="560" height="315" src="https://www.youtube.com/embed/lFjIVIIcCvc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
        &nbsp;&nbsp;&nbsp;
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lFjIVIIcCvc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </div>
        </div>
    )
}
 
export default AboutUs;
