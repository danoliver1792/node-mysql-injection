// configurando a conexao com o MySQL

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teste_injection', 'user', '1234', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
