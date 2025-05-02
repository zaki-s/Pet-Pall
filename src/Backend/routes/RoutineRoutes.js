import express from 'express';
import Routine from '../models/Routine.js';

const router = express.Router();

// Get all routines
router.get('/', async (req, res) => {
  try {
    const routines = await Routine.findAll();
    res.json(routines);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching routines' });
  }
});

export default router;
