import React from 'react';
 
import {useState, useEffect} from "react"
import './aboutus.css';
 
import { useHistory } from "react-router-dom"; 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutUs=({props})=>{
    return(
        <div >
            <h1 className='title'>About Us</h1>
            <Carousel>
                <div>
                    <img src="https://www.fodors.com/wp-content/uploads/2018/08/Hero-Ultimate-Thing-To-Do-Spain-shutterstock_362200070.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.fodors.com/wp-content/uploads/2018/08/Hero-Ultimate-Thing-To-Do-Spain-shutterstock_362200070.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.fodors.com/wp-content/uploads/2018/08/Hero-Ultimate-Thing-To-Do-Spain-shutterstock_362200070.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
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
