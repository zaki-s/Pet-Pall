import { DataTypes } from 'sequelize';
import sequelize from '../config/Database.js';

const Profile = sequelize.define('Profile', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  address: DataTypes.STRING
});

export default Profile;
