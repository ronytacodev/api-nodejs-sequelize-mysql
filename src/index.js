const express = require("express");
const usuarios = require("./routes/usuarios");
const app = express();
const port = process.env.PORT || 3030;

app.use("/usuarios",usuarios);

app.listen(port, () => {
    console.log("servidor ejecutándose en el puerto:", port);
});