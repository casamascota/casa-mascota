const express = require('express');
const app = express();
const port = 3000;


const doctorRoute = require('./api/v1/routes/doctor_route');
app.use('/api/doctores', doctorRoute);

app.get('/', (req, res) => {
  res.send('Hola desde Express.js!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
