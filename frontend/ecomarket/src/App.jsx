import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import './App.css';
import About from './components/About';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ecomarket/sobre-nosotros" element={<About />} />
        <Route path='/ecomarket/productos/' element={<ProductList/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/cerrar-session" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;