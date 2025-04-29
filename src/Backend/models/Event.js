import { DataTypes } from 'sequelize';
import sequelize from '../config/Database.js';

const Event = sequelize.define('Event', {
  title: DataTypes.STRING,
  description: DataTypes.STRING,
  date: DataTypes.DATE,
  event_image: DataTypes.STRING, // <-- Add this line
});

export default Event;

