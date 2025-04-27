import express from 'express';

const router = express.Router();


// Example route to get all pets

router.get('/', (req, res) => {

    res.json({ message: 'Get all pets' });

});


// Example route to create a new pet

router.post('/', (req, res) => {

    const newPet = req.body; // Assuming the pet data is sent in the request body

    res.status(201).json({ message: 'Pet created', pet: newPet });

});


// Add more routes as needed...


// Export the router as the default export

export default router;
