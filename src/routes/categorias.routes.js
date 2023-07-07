const express = require('express')
const router = express.Router()
const categoriasController = require('../controllers/categorias.controller');

// Retrieve all categorias
router.get('/', categoriasController.findAll);

// Create a new categorias
router.post('/', categoriasController.create);

// Retrieve a single categoria with id
router.get('/:id', categoriasController.findById);

// Update a categoria with id
router.put('/:id', categoriasController.update);

// Delete a categoria with id
router.delete('/:id', categoriasController.delete);

module.exports = router