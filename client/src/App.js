import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Landing from './components/Landing';
import NavBar from './components/Navbar';
import About from './components/About';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
        <Route path="/user_dashboard" element={<User />} />
        <Route path="/admin_dashboard" element={<Admin />} />
        <Route path="/manager_dashboard" element={<Manager />} />
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;

