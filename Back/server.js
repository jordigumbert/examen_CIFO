require('dotenv').config();
// per fer servir dades de .env
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path"); // si tenim temps mirem de fer-ho OS unaware

const server = new express(); // creem un objecte de classe express amb nom server per fer-lo servir. 

// require("./mysql_conn.js"); 


server.use(cookieParser());    // Middleware per les cookies 
server.use(express.json());    // 
//  (CSS, JS del front)
server.use(express.static(path.join(__dirname, "..",  "front")));


// console.log(process.env.SERVER_PORT);

const Port = process.env.SERVER_PORT || 3000;  // si no troba PORT al .env  farem servir el 3000 per defecte
server.listen(Port, () => console.log("Servidor http://localhost:" + Port)); 