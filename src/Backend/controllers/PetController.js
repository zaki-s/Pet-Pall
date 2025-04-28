import Pet from '../models/Pet.js';


export const getPets = async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (error) {
    console.error('Error fetching pets:', error);
    res.status(500).json({ message: 'Error fetching pets' });
  }
};
