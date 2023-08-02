import React from "react";
import img1 from "../images/L4.png"
import "../styles/Styles.css";

function Navbar(){
    return(
        <header>
            <img src={img1} />
            <nav>
                <a href="#">HOME</a>
                <a href="#">Books</a>
                <a href="#">Magazines</a>
                <a href="#">About Us</a>
                <a href="#">Vendors</a>
                <a href="#">Login</a>
            </nav>
        </header>
    );
}

export default Navbar