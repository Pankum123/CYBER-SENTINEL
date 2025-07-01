import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SearchControls from "../components/SearchControls";
import ShowResult from "../components/ShowResult";
import Footer from "../components/Footer";


function Home() {
  const [show, setShow] = useState(false);
  return (

     <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* Main content area grows to fill remaining height */}
      <div className="flex-grow md:mt-14">
        <SearchControls onSearchClick={() => setShow(true)} />
        {show && <ShowResult />}
      </div>

      <Footer />
    </div>

  );
}

export default Home;
