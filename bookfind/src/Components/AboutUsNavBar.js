import React from "react";
import img1 from "../images/L4.png"
import "../styles/Styles1.css";

function AboutUsNavBar(){
    return(
        <header className="AbtusNavBar">
            <img src={img1} />
            <nav>
                <a href="/">HOME</a>
                <a href="/Books">Books</a>
                <a href="/Magazines">Magazines</a>
                <a href="/About_us">About Us</a>
                <a href="#">Vendors</a>
                <a href="#">Login</a>
            </nav>
        </header>
    );
}

export default AboutUsNavBar