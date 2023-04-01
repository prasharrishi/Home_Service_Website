import React from "react";
import NavBar from "../Components/NavBar";
import "../App.css";
import Services from "../Components/Services";
import women from "../assets/women.png";
import Footer from "../Components/Footer";
import Introduction from "../Components/Introduction";

const Home=()=>{
    return(
<>

      <div className="body-content">
        <div className="introduction">
          <div className="heading">
            A New Solutions
            <br />
            For Your Home Cleaning
          </div>
          <div className="sub-heading">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error
            magnam quidem. Quos, consectetur? Vero ipsa dolorum voluptate
            perspiciatis numquam?
          </div>
          <button className="schedule-button" type="submit">
            Schedule Service
          </button>
        </div>
        <div className="border-image">
          <img className="women-image" src={women} alt="" />
        </div>
      </div>

      <Introduction />

      <Services />
      <Footer/>
    </>
    )
}
export default Home;