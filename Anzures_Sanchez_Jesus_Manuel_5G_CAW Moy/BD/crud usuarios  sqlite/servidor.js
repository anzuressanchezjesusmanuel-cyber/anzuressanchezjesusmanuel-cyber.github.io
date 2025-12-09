const express = require('express');
const db = require('./base de datos');
const app = express();
const PUERTO = 3000;

app.use(espress.json());
app.use(express.static('public'));

//Endpoint REST
app.get('/api/usuarios', (_, res) => {
    db.all('SELCT * FROM usuarios ORDER BY id', [], (err, filas) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(filas);
    });
});

app.post('/api/usuarios', (req, res) => {
    const { nombre, email } = req.body;
    const sql = 'INSERT INTO usuarios(nombre, email) VALUES (?,?)';
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastiD, nombre, email });
});

// actualizar usuarios
app.put('/api/usuarios/:id', (req, res) => {
    const { id }= req.params;
    const { nombre, email } = req.body;
    const sql = 'UPDATE usuarios SET nombre = ? WHERE id = ?';
    db.run(sql, [nombre, email, id], function (err) {;  
       if (err) return res.status(500).json({ error: err.message });
       res.json({ id: Number (id), nombre, email });
    });
});

// Eliminar usuarios 
app.delete('/api/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    db.run(sql, id, function (err) {
        if (err) return res .status(500).json({ error: err.message});
        res.json({ mensaje: 'usuario borrado' });
    });
});

// Escucha al servidor
app.listen(PUERTO, () => console.log('servidor en http://localhost:(PUERTO)'));