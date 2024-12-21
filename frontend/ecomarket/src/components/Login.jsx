import React, { useState } from 'react';
import '../assets/styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  const [showRecoverModal, setShowRecoverModal] = useState(false);
  const [recoveredPassword, setRecoveredPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = '/home'; // Redirecciona a home
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleRecoverPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/recover', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, dni }),
      });

      const data = await response.json();

      if (data.password) {
        setRecoveredPassword(data.password);
      } else {
        alert('Usuario o DNI incorrecto');
      }
    } catch (error) {
      console.error('Error al recuperar contraseña:', error);
    }
  };

  return (
    <body className='login'>
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Iniciar Sesión</button>
            </form>
            <div className="login-links">
                <a href="#forgot-password" onClick={() => setShowRecoverModal(true)}>Olvidé mi contraseña</a>
                <a href="/register">Registro</a>
            </div>
            {showRecoverModal && (
                <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={() => setShowRecoverModal(false)}>×</span>
                    <h2>Recuperar Contraseña</h2>
                    <form onSubmit={handleRecoverPassword}>
                    <div className="form-group">
                        <label htmlFor="recover-username">Usuario</label>
                        <input
                        type="text"
                        id="recover-username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recover-dni">DNI</label>
                        <input
                        type="text"
                        id="recover-dni"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit">Recuperar Contraseña</button>
                    </form>
                    {recoveredPassword && (
                    <p>Tu contraseña es: {recoveredPassword}</p>
                    )}
                </div>
                </div>
            )}
        </div>
    </body>
  );
};

export default Login;