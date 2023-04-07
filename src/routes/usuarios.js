const router = require('express').Router();

// Obtener todos los usuarios
router.get('/', (req, res)=> {
    res.json([]);
});

// Obtener solo un usuario
router.get('/:id', (req, res)=> {
    const id = req.params.id;
    res.json({
        id,
        nombre: "usuario",
    });
});

// Crear un usuario
router.post('/', (req, res)=> {
    const {nombre, email} = req.body;

    if(!nombre || !email) {
        return res.status(400).json({
            error: "uno o mas campos vacíos"
        });
    }

    res.json({
        nombre,
        email,
    });
});

module.exports = router;
