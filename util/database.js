const Sequelize = require('sequelize');

const sequelize = new Sequelize('[database_name]','[database_user]','[database_user_password]',{
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;
