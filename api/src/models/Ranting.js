const {DataTypes} = require('sequelize');
const {sequelize} = require('../db');

const Rating = sequelize.define('rating', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    movie: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = {
    Rating
};