import React from "react";
import Navbar from "./Components/NavBar";
import Body from "./Components/BodyContent";
import Bookstore from "./Components/BookStore";
import './styles/Styles.css'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Body />
      <Bookstore />
    </React.Fragment>
    
  );
}

export default App;
