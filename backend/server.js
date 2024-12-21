const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos SQLite
const db = new sqlite3.Database('ecomarket.db');

// Crear tabla de usuarios si no existe
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    dni TEXT
  )`);
});

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (row) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

// Ruta para el registro
app.post('/register', (req, res) => {
  const { username, password, dni } = req.body;
  db.run('INSERT INTO users (username, password, dni) VALUES (?, ?, ?)', (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ success: true });
    }
  });
});

// Ruta para recuperar contraseña
app.post('/recover', (req, res) => {
  const { username, dni } = req.body;
  db.get('SELECT password FROM users WHERE username = ? AND dni = ?', [username, dni], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (row) {
      res.json({ password: row.password });
    } else {
      res.json({ error: 'Usuario o DNI incorrecto' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});