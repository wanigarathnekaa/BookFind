import React from "react";
import Navbar from "./Components/NavBar";
import Body from "./Components/BodyContent";
import TrendingBooks from "./Components/TrendingBooks";
import BookRec from "./Components/BookRec";
// import Bookstore from "./Components/BookStore";
import './styles/Styles.css'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Body />
      <TrendingBooks />
      <BookRec />
      {/* <Bookstore /> */}
    </React.Fragment>
    
  );
}

export default App;
