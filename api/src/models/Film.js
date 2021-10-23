const { DataTypes } = require('sequelize');
const  { sequelize } = require('../db');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// defino el modelo
const Film = sequelize.define('film', {
    title: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    picture: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    duration: {
        type: DataTypes.STRING
    },
    trailer: {
        type: DataTypes.STRING
    },
    release: {
        type: DataTypes.STRING
    },

});

module.exports = {
    Film
};