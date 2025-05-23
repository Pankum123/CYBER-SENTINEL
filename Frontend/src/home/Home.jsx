import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SearchControls from '../components/SearchControls'
import LayoutMap from '../components/LayoutMap'
import Tableinformation from '../components/Tableinformation'
import Userinformation from '../components/Userinformation'
import Footer from '../components/Footer'




function Home() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <NavBar/>

      <SearchControls onSearchClick={() => setShow(true)} /> {/* ✅ function pass karo */}

      {show && (
        <>
        <LayoutMap/>
        <Tableinformation/>
        <Userinformation/>
        </>
      )}


      



      <Footer/>
    </div>
  )
}

export default Home
