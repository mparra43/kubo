require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT} = process.env;
console.log(DB_USER, DB_PASSWORD, DB_HOST);
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/storefilms`, {
    logging: false,
    native: false,
});

async function checkConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
checkConnection()
module.exports = {
    sequelize
}
