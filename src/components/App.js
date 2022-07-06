import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Instagram from "./Instagram";
import Depositions from "./Depositions";

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div>
        <Depositions/>
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
