const express = require('express');
const conectarDB = require('./config/db.js');

conectarDB()
const app = express();

app.use(express.json());
app.use('/api', require('./routes/routes.js'))

app.listen(4000, () => {
    console.log('Servidor ejecutándose en el puerto 4000');
})
