import React, { useState, useEffect } from 'react';
import './assets/styles/Contactos.css';
import RedesSociales from './components/RedesSociales';
import Registro from './components/Registro';
import Fecha from './components/Fecha';
import Hora from './components/Hora';

function Contacto() {
  return (
    <div>
      <header>
        <RedesSociales />
      </header>
      <main>
        <div className="contenedor">
          <div className="logo">
            <img src="/src/images/logo.png" alt="Logo" />
          </div>
          <div className="contenedor-form">
            <Registro />
            <img src="/src/images/Frame 37.png" alt="Imagen decorativa" />
          </div>
        </div>
      </main>
      <footer>
        <Fecha />
        <Hora />
      </footer>
    </div>
  );
}

export default Contacto;
