const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../config/db'); // Adjust the path as necessary


const Pet = sequelize.define('Pet', {

    // Define the attributes of the Pet model

    id: {

        type: DataTypes.INTEGER,

        autoIncrement: true,

        primaryKey: true,

    },

    name: {

        type: DataTypes.STRING,

        allowNull: false, // Name is required

    },

    species: {

        type: DataTypes.STRING,

        allowNull: false, // Species is required

    },

    age: {

        type: DataTypes.INTEGER,

        allowNull: false, // Age is required

    },

    ownerName: {

        type: DataTypes.STRING,

        allowNull: false, // Owner name is required

    },

    photo: {

        type: DataTypes.STRING, // Optional: URL for the pet's photo

        allowNull: true,

    },

}, {

    // Additional model options

    tableName: 'pets', // Specify the table name if different from the model name

    timestamps: true, // Automatically manage createdAt and updatedAt fields

});


// Export the Pet model

module.exports = Pet;
