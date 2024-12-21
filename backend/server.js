const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./database');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error en el servidor' });
    } else if (row) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  });
});

app.post('/register', (req, res) => {
  const { username, password, dni } = req.body;
  db.run('INSERT INTO users (username, password, dni) VALUES (?, ?, ?)', [username, password, dni], function(err) {
    if (err) {
      res.status(500).json({ success: false, message: 'Error en el registro' });
    } else {
      res.json({ success: true });
    }
  });
});

app.post('/recover', (req, res) => {
  const { username, dni } = req.body;
  db.get('SELECT password FROM users WHERE username = ? AND dni = ?', [username, dni], (err, row) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error en el servidor' });
    } else if (row) {
      res.json({ password: row.password });
    } else {
      res.status(404).json({ success: false, message: 'Usuario o DNI incorrecto' });
    }
  });
});

// Nueva ruta para obtener productos
app.get('/ecomarket/productos', (req, res) => {
  db.all('SELECT id, name, price, img FROM productos', [], (err, rows) => {
    if (err) {
      res.status(500).json({ success: false, message: 'Error en el servidor' });
    } else {
      res.json(rows);
    }
  });
});

app.listen(3001, () => {
  console.log('Servidor corriendo en el puerto 3001');
});