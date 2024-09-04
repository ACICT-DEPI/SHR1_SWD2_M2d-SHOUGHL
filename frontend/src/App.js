import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar.jsx';
import SearchBar from './components/Searchbar/SearchBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Routes/Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <div></div>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
