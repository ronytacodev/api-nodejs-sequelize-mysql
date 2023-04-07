const express = require("express");
const cors = require("cors");
const usuarios = require("./routes/usuarios");
const db = require("./db/database");
const app = express();
const port = process.env.PORT || 3030;

(async () => {
    try {
        await db.authenticate();
        await db.sync();
        console.log("conectados a la base de datos");
    } catch (error) {
        throw new Error(error);
    }
})()

// middleware
app.use(express.json());  //recibir información
app.use(cors()); //habilitar otras aplicaciones para realizar solicitudes a nuestra app

app.use("/usuarios",usuarios);

app.listen(port, () => {
    console.log("servidor ejecutándose en el puerto:", port);
    
});