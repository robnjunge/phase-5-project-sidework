import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Landing from './components/Landing';
import NavBar from './components/Navbar';
import About from './components/About';
import UpdateRequest from './components/UpdateRequest';
import AddRequest from './components/AddRequest';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Logout from './components/Logout';
import Admin from './components/dashboard/Admin';
import User from './components/dashboard/User';
import Manager from './components/dashboard/Manager';
import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/user_dashboard" element={<User />} />
        <Route path="/admin_dashboard" element={<Admin />} />
        <Route path="/manager_dashboard" element={<Manager />} />
        <Route path="/update/:id" element={<UpdateRequest />} />
        <Route path="/add_request" element={<AddRequest />} />
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;

