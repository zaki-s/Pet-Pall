import { DataTypes } from 'sequelize';
import sequelize from '../config/Database.js';

const HealthRecord = sequelize.define('HealthRecord', {
  pet_id: DataTypes.INTEGER,
  visit_date: DataTypes.DATE,
  notes: DataTypes.TEXT
});

export default HealthRecord;