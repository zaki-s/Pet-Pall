const express = require('express');

const { getPets, addPet, deletePet } = require('../controllers/petController');


const router = express.Router();


// Route to get all pets

router.get('/', getPets);


// Route to add a new pet

router.post('/', addPet);


// Route to delete a pet by ID

router.delete('/:id', deletePet);


module.exports = router
