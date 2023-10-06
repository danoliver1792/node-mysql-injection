// definindo uma rota que insere dados no MySQL de forma segura

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Rota para inserir um usuario
router.post('/create', async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await User.create({ username, email });
        return res.json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar usuario' });
    }
});

module.exports = router;
