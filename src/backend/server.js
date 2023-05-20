const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors({
  origin: '*',
}));
const doctorRoute = require('./api/v1/routes/doctor_route');
const estilistaRoute = require('./api/v1/routes/estilista_route');
const mascotaRoute = require('./api/v1/routes/mascota_route');
app.use('/api/doctores', doctorRoute);
app.use('/api/estilistas', estilistaRoute);
app.use('/api/mascotas', mascotaRoute);
app.get('/', (req, res) => {
  res.send('Hola desde Express.js!');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
