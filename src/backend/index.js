const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();

app.use(cors());

//Añadir middlewares si son necesarios




//conexion bdd, quiza modularizar con un exports e imports 
//o la antigua manera con .exports
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
app.get('/Doctor', (req, res) => {
    db.all('SELECT * FROM Doctor', (err, rows) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.send(rows);
      }
    });
  });
  
  // Obtener un usuario por ID
  app.get('/Doctor/:id', (req, res) => {
    //params para el id
    const id = req.params.id;
    db.get('SELECT * FROM Doctor WHERE id = ?', [id], (err, row) => {
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
  app.post('/Doctor', (req, res) => {
    const { id_doctor, nombre, apellido } = req.body;
    db.run(
      'INSERT INTO users(id_doctor, nombre, apellido,numero_tel ,direccion) VALUES(?, ?, ?)',
      [id_doctor, nombre, apellido,numero_tel,direccion],
      (err) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.send('Doctor creado succesfully, siuu!');
        }
      }
    );
  });
  
  // Actualizar un usuario por ID
  app.put('/Doctor/:id', (req, res) => {
    const id = req.params.id;
    const { id_doctor, nombre, apellido } = req.body;
    db.run(
      'UPDATE Doctor SET id_doctor = ?, nombre = ?, apellido = ?, numero_tel = ?,direccion = ? WHERE id = ?',
      [id_doctor, nombre, apellido, id,numero_tel,direccion],
      (err) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.send('Doctor actualizao');
        }
      }
    );
  });
  
  // Eliminar un usuario por ID
  app.delete('/Doctor/:id', (req, res) => {
    const id = req.params.id;
    db.run('DELETE FROM Doctor WHERE id = ?', [id], (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.send('DOctor Funad0');
      }
    });
  });
  