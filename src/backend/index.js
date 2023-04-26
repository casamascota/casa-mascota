const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();

app.use(cors());

const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

// Rutas de tu API

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Obtener todos los usuarios
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', (err, rows) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.send(rows);
      }
    });
  });
  
  // Obtener un usuario por ID
  app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
      if (err) {
        res.status(500).send(err.message);
      } else if (!row) {
        res.status(404).send('User not found');
      } else {
        res.send(row);
      }
    });
  });
  
  // Crear un nuevo usuario
  app.post('/users', (req, res) => {
    const { name, email, password } = req.body;
    db.run(
      'INSERT INTO users(name, email, password) VALUES(?, ?, ?)',
      [name, email, password],
      (err) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.send('User created successfully');
        }
      }
    );
  });
  
  // Actualizar un usuario por ID
  app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    db.run(
      'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
      [name, email, password, id],
      (err) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.send('User updated successfully');
        }
      }
    );
  });
  
  // Eliminar un usuario por ID
  app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM users WHERE id = ?', [id], (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.send('User deleted successfully');
      }
    });
  });
  