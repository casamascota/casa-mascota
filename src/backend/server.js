const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const doctorRoute = require('./api/v1/routes/doctor_route');
const estilistaRoute = require('./api/v1/routes/estilista_route');
const enfermeroRoute = require('./api/v1/routes/enfermero_route');

app.use('/api/doctores', doctorRoute);
app.use('/api/estilistas', estilistaRoute);
app.use('/api/enfermeros', enfermeroRoute);
app.get('/', (req, res) => {
  res.send('Hola desde Express.js!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
