const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(Path.join(__dirname, 'usuarios.db'));

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    )`);
});

Module.exports = db;