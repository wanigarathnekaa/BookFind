import React from 'react';
import Navbar from "../Components/NavBar";
import img1 from "../images/BackIMG1.png";

function AboutUsPage() {
    
  return (
    <div className= "Aboutus">
        <Navbar />
        {/* <img src={img1} alt='backgroundImage'></img> */}
        <h1>WHO WE ARE</h1>
        <p>
            Welcome to Bookfind, the centralized website that transforms your<br></br>
            book search experience. With Bookfind, you can effortlessly check<br></br>
            book availability across multiple stores, find the nearest option<br></br>
            based on the location, and enjoy a hustle-free search process<br></br>
            Discover new reads and explore the world of literature with ease.<br></br>
            Start your book journey with Bookfind today!<br></br>
            Launched in July 2023
        </p>
    </div>
  )
}

export default AboutUsPage