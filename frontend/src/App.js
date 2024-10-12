import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Routes/Home/Home.jsx';
import Regiter from './components/Routes/Register/Regiter.jsx';
import Login from './components/Login/Login.jsx';
import Profile from './components/Routes/Profile.jsx';
import BeProvider from './components/Routes/BeProvider.jsx';
import Services from './components/Routes/Services.jsx';
import Providers from './components/Routes/Providers.jsx';
import Contact from './components/Routes/Contact.jsx';
import Chat from './components/Routes/Chat.jsx';
import EditProfile from './components/Routes/EditProfile.jsx';
import SingleService from './components/Routes/SingleService.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Regiter />} />
        <Route path='/login' element={<Login />} />
        <Route path='/beProvider' element={<BeProvider />} />
        <Route path='/editProfile' element={<EditProfile />} />
        <Route path='/' element={<Home />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/services' element={<Services />} />
        <Route path='/providers' element={<Providers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/singleService/:id' element={<SingleService />} />
      </Routes>
    </div>
  );
}

export default App;
