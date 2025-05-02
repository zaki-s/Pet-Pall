import { DataTypes } from 'sequelize';
import sequelize from '../config/Database.js'; // adjust path if needed

const Routine = sequelize.define('Routine', {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  time: DataTypes.STRING,
  routine_image: DataTypes.STRING, // ✅ this must be here
});

export default Routine;

