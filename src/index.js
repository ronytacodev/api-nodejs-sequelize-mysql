const express = require("express");
const cors = require("cors");
const usuarios = require("./routes/usuarios");
const app = express();
const port = process.env.PORT || 3030;

// middleware
app.use(express.json());  //recibir información
app.use(cors()); //habilitar otras aplicaciones para realizar solicitudes a nuestra app

app.use("/usuarios",usuarios);

app.listen(port, () => {
    console.log("servidor ejecutándose en el puerto:", port);
    
});