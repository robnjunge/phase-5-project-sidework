import './App.css';
import Signin from './components/Signin';
import Landing from './components/Landing';
import NavBar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState([])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Signin setUser= {setUser} />} />
      </Routes>
     
    </div>
  );
}

export default App;
