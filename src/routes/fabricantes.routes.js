const express = require('express')
const router = express.Router()
const fabricantesController = require('../controllers/fabricantes.controller');

// Retrieve all fabricantes
router.get('/', fabricantesController.findAll);

// Create a new fabricantes
router.post('/', fabricantesController.create);

// Retrieve a single fabricante with id
router.get('/:id', fabricantesController.findById);

// Update a fabricante with id
router.put('/:id', fabricantesController.update);

// Delete a fabricante with id
router.delete('/:id', fabricantesController.delete);

module.exports = router