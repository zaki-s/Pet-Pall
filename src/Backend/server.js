import express from 'express';

import cors from 'cors';

import morgan from 'morgan';

import dotenv from 'dotenv';

import sequelize from './config/db.js'; // Ensure to add .js extension

import petRoutes from './petRoutes.js'; // Ensure to add .js extension




dotenv.config();


const app = express();

const PORT = process.env.PORT || 5000;


app.use(cors());

app.use(express.json());

app.use(morgan('dev')); // Logging middleware


// Routes

app.use('/api/pets', petRoutes);


// Test database connection and start server

sequelize.authenticate()

  .then(() => {

    console.log('Database connected...');

    return sequelize.sync(); // Creates tables if not exist

  })

  .then(() => {

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  })

  .catch(err => console.error('Error connecting to database:', err));


// Error handling middleware

app.use((err, req, res, next) => {

  console.error(err.stack);

  res.status(500).json({ message: 'Internal Server Error' });

});
