const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a root route
app.get('/', (req, res) => {
res.send("Hello World");
});

// Require productos routes
const productosRoutes = require('./src/routes/productos.routes');

// Require categorias routes
const categoriasRoutes = require('./src/routes/categorias.routes');

// Require fabricantes routes
const fabricantesRoutes = require('./src/routes/fabricantes.routes');

// using as middleware for productos
app.use('/api/v1/productos', productosRoutes);

// using as middleware for categorias
app.use('/api/v1/categorias', categoriasRoutes);

// using as middleware for fabricantes
app.use('/api/v1/fabricantes', fabricantesRoutes);

// listen for requests
app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});