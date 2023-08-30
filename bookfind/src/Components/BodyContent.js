import React from "react";
import "../styles/Styles.css";
import { TextField, Box } from "@material-ui/core";
import img2 from '../images/bookshop.png';

function Body(){
    return(
        <body>
            <div className="content">
                <img src = {img2} />
                <p className="para1">e-Books | Explore | Discover</p>
                <h1 className="heading1">IT'S NOT JUST A<br></br>BOOKSTORE.</h1>
                <p className="para2">It's a universe.</p>
                <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                    <TextField
                        label="Find a book"
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1, borderRadius: "100%" }}
                    />
                </Box>
            </div>
        </body>
    );
}

export default Body