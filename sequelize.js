const Sequelize = require('sequelize');
const UserModel = require('./models/userModel');

const connection = new Sequelize('database','user','pass', {
host: 'localhost',
dialect: 'mysql'});

const User = UserModel.User(connection, Sequelize);
connection.sync({force: true}).then(() =>{
    console.log('Database and tables created/connected');
});

module.exports = {
    User
};