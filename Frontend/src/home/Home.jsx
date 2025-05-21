import React from 'react'
import NavBar from '../components/NavBar'
import SearchControls from '../components/SearchControls'
import LayoutMap from '../components/LayoutMap'
import Tableinformation from '../components/Tableinformation'
import Userinformation from '../components/Userinformation'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
      <NavBar/>
      <SearchControls/>
      <LayoutMap/>
      <Tableinformation/>
      <Userinformation/>
      <Footer/>
    </div>
  )
}

export default Home
