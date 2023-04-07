const Usuario = require('../models/Usuario');

const router = require('express').Router();

// Obtener todos los usuarios
router.get('/', async (req, res)=> {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

// Obtener solo un usuario
router.get('/:id', async (req, res)=> {
    const id = req.params.id;
    const usuario = await Usuario.findByPk(id);
    res.json(usuario);
});

// Crear un usuario
router.post('/', async (req, res)=> {
    const {nombre, email} = req.body;

    if(!nombre || !email) {
        return res.status(400).json({
            error: "uno o mas campos vacíos"
        });
    }
    const usuario = await Usuario.create({nombre, email});
    res.json({
        nombre,
        email,
    });
});

module.exports = router;
