import express from 'express';
import sequelize from './config/db.js'; // Adjust path if needed

const app = express();

// middlewares
app.use(express.json());

// routes
// app.use('/api/pets', petRoutes); // example if you have routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

