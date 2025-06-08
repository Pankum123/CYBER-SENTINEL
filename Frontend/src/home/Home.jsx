import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SearchControls from "../components/SearchControls";
import ShowResult from "../components/ShowResult";
import Footer from "../components/Footer";


function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <NavBar />

      <SearchControls onSearchClick={() => setShow(true)} />{" "}
    
      {show && <ShowResult />}

      <Footer />
      
    </div>
  );
}

export default Home;
