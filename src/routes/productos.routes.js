const express = require('express')
const router = express.Router()
const productosController = require('../controllers/productos.controller');

// Retrieve all productos
router.get('/', productosController.findAll);

// Create a new productos
router.post('/', productosController.create);

// Retrieve a single producto with id
router.get('/:id', productosController.findById);

// Update a producto with id
router.put('/:id', productosController.update);

// Delete a producto with id
router.delete('/:id', productosController.delete);

module.exports = router