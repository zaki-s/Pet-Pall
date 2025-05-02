import express from 'express';
import HealthRecord from '../models/HealthRecord.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const healthRecords = await HealthRecord.findAll();
    res.json(healthRecords);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching health records' });
  }
});

export default router;
