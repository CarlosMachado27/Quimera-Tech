import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Instagram from "./Instagram";
import Depositions from "./Depositions";
import Carousel from "./Carousel";
import { DataSlide } from "./DataSlide";
import './Carousel.css';


const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div>
        <Carousel slides={DataSlide}/>
      </div>

      <div>
        <Depositions />
      </div>

      <div>
        <Instagram/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>

  )
}

export default App
