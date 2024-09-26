/*
comandos para api

1--npm init -y  // inicialización npm

2--Añadir al .json:
"dev":"nodemon app.js"

3---npm install express mongoose nodemon
*/
const express = require("express");
const dbconnect = require("./config.js");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({origin:'*'}))
app.use('/api/usuarios', require('./routes/userRoutes.js'));
app.listen(3005,()=>{
    console.log("el servidor esta en el puerto 3005")
})


dbconnect();