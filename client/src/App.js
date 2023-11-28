import './App.css';
import Signin from './components/Signin';
import Landing from './components/Landing';
import NavBar from './components/Navbar';
import About from './components/About';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;

