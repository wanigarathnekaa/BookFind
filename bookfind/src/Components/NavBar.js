import React from "react";
import img1 from "../images/L4.png"
import "../styles/Styles.css";

function Navbar(){
    return(
        <header>
            <img src={img1} />
            <nav>
                <a href="/">HOME</a>
                <a href="/Books">Books</a>
                <a href="/About_us">About Us</a>
                <a href="#">Vendors</a>
                <a href="/SignInPage">SignIn</a>
            </nav>
        </header>
    );
}

export default Navbar