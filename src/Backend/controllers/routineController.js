// controllers/routineController.js

const { Routine } = require('../models');

exports.getRoutines = async (req, res) => {
  try {
    const routines = await Routine.findAll(); // this will now include all fields
    res.json(routines);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching routines', error });
  }
};
