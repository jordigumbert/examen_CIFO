const express = require("express");
const router = express.Router();
const path = require("path");
//const { authPage, redirectIfLogged } = require("../auth.middleware.js");






router.get("/",  (req, res) => {
    console.log("enviando index.html");
    
    res.sendFile(path.join(__dirname, "..", "..", "front", "index.html"));
});

router.get("/dades", (req, res) => {
    console.log("enviando otro.html");
    res.sendFile(path.join(__dirname, "..", "..", "front", "otro.html"));
});

/*
router.get("/me", authPage, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "front", "me.html"));
});

router.get("/todos", authPage, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "front", "todos.html"));
});

*/


//////////////////////////////////// EXPORTS //////////////////////////////////////
module.exports = router;
///////////////////////////////////////////////////////////////////////////////////