import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';


// Load environment variables from .env file

dotenv.config();


// Create a new Sequelize instance

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {

  host: process.env.DB_HOST,

  dialect: 'mysql', // Change this to your database dialect (e.g., 'postgres', 'sqlite', etc.)

});


// Test the connection

try {

  await sequelize.authenticate();

  console.log('Database connected...');

} catch (error) {

  console.error('Unable to connect to the database:', error);

}


export default sequelize;
