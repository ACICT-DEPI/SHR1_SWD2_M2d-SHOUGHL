import React from 'react'
import NavBar from '../Navbar/Navbar'
import SearchBar from '../Searchbar/SearchBar'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <div>
      <div style={{ position: 'sticky', top: '0', zIndex: '10', backgroundColor: 'white'}}>
        <NavBar />
        <SearchBar />
      </div>
      <Footer />
    </div>
  )
}

export default Contact