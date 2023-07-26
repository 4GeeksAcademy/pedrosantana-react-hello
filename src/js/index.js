//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Jumbotron from "./component/jumbotron.jsx";
import BootstrapCards from "./component/card.jsx";
import NavBar from "./component/bar";
import Footer from "./component/footer";
//render your react application
ReactDOM.render(
    <div className="container-fluid">
        <NavBar />
        <div className="container">
            <Jumbotron />
            <BootstrapCards />
        </div>
        <Footer />
    </div>,
    document.querySelector("#app")
);