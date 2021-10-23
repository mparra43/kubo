const {DataTypes} = require('sequelize');
const {sequelize} = require('../db');

const Gender = sequelize.define('gender', {
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = {
    Gender
};