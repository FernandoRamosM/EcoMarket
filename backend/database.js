const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ecomarket.db'); // Puedes cambiar ':memory:' por el nombre de un archivo para persistencia

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    dni TEXT
  )`);
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL
  )`);
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS ventas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product TEXT,
    price REAL,
    stat TEXT,
    fecha text
  )`);
});



module.exports = db;