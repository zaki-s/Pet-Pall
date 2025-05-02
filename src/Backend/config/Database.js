// src/Backend/config/Database.js

import { Sequelize } from "sequelize";

const db = new Sequelize('petpal_db', 'root', 'Awilo9701@', {
  host: 'localhost',
  dialect: 'mysql'  // <<< 💥 this is what you were missing
});

export default db;



