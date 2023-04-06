const express = require('express');
const app = express();
const port = process.env.PORT || 3030;




app.listen(port, () => {
    console.log("servidor ejecutándose en el puerto:", port);
});