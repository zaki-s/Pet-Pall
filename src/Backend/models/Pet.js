import { DataTypes } from 'sequelize';
import sequelize from '../config/Database.js';

const Pet = sequelize.define('Pet', {
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  age: DataTypes.INTEGER,
  photo: DataTypes.STRING,
});

export default Pet;
