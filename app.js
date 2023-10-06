// iniciando o servidor

const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// importando o modelo e sincronizando com o banco de dados
const User = require('./models/user');
(async () => {
    await sequelize.sync();
})();

// rotas
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// node app.js