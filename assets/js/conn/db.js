const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta a tu base de datos SQLite
const dbPath = path.resolve(__dirname, '/assets/db/EcoMarket.sqlite');
// Crear y abrir la conexión
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con SQLite:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});

// Exportar la conexión
module.exports = db;
