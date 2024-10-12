import Footer from '../../Footer/Footer'
import NavBar from '../../Navbar/Navbar'
import SearchBar from '../../Searchbar/SearchBar'
import Brief from './Brief'
import './Home.css'
import ToDo from './ToDo'
import WhyUs from './WhyUs'

const Home = () => {
  return (
    <div>
      <div style={{ position: 'sticky', top: '0', zIndex: '10', backgroundColor: 'white'}}>
        <NavBar />
        <SearchBar />
      </div>
      <Brief />
      <WhyUs />
      <ToDo />
      <Footer />
    </div>
  )
}

export default Home