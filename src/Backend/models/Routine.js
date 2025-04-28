import { DataTypes } from 'sequelize';
import sequelize from '../config/Database.js';

const Routine = sequelize.define('Routine', {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  time: DataTypes.STRING
});

export default Routine;
