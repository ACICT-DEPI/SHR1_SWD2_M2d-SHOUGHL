import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar/Navbar.jsx';
import SearchBar from './components/Searchbar/SearchBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Routes/Home/Home.jsx';
import Regiter from './components/Routes/Register/Regiter.jsx';
import Login from './components/Login/Login.jsx';
import Profile from './components/Routes/Profile.jsx';
import BeProvider from './components/Navbar/BeProvider.jsx';

function App() {
  return (
    <div className="App">
      <div style={{ position: 'sticky', top: '0', zIndex: '10', backgroundColor: 'white'}}>
        <NavBar />
        <SearchBar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<Regiter />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
        <Route path='beProvider' element={<BeProvider />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
