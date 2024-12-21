import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/register', { username, password, dni });
      if (response.data.success) {
        alert('Registro exitoso');
        window.location.href = '/';
      } else {
        alert('Error en el registro');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dni">DNI</label>
          <input
            type="text"
            id="dni"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;