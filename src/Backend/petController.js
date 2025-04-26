const Pet = require('../models/Pet');


// Get all pets

exports.getPets = async (req, res) => {

  try {

    const pets = await Pet.findAll();

    res.status(200).json(pets); // Return 200 OK

  } catch (error) {

    console.error('Error fetching pets:', error);

    res.status(500).json({ message: 'Error fetching pets' }); // Return 500 Internal Server Error

  }

};


// Add a new pet

exports.addPet = async (req, res) => {

  const { name, species, age, ownerName } = req.body;


  // Basic validation

  if (!name || !species || !age || !ownerName) {

    return res.status(400).json({ message: 'All fields are required' }); // Return 400 Bad Request

  }


  try {

    const pet = await Pet.create({ name, species, age, ownerName });

    res.status(201).json(pet); // Return 201 Created

  } catch (error) {

    console.error('Error adding pet:', error);

    res.status(500).json({ message: 'Error adding pet' }); // Return 500 Internal Server Error

  }

};


// Delete a pet

exports.deletePet = async (req, res) => {

  const { id } = req.params;


  try {

    const deletedPet = await Pet.destroy({ where: { id } });

    if (deletedPet) {

      res.status(204).send(); // Return 204 No Content

    } else {

      res.status(404).json({ message: 'Pet not found' }); // Return 404 Not Found

    }

  } catch (error) {

    console.error('Error deleting pet:', error);

    res.status(500).json({ message: 'Error deleting pet' }); // Return 500 Internal Server Error

  }

};
