
// necesitaremos el modiulo express para el router
const express = require("express");
// creamos una coonexion server con express llamada router
const router = new express.Router();
// NOS TRAEMOS LA CON3XION   EN OBJETO `SQLDB`
const SQLDB = require("../SQL_conn.js");



// ------- -> POST <- -------

router.post("/API/recibedatos/:user",  async (req, res) => {
// metodo post para enviar los datos del formulario 

// recibiremos un nombre, habrá que mirar qué id tiene en la BBDD
const { user } = req.params ; 
const { dades } = body.dades ; 
  try { // busquem l'usuari pel nom i SELECT la id que tingui
    const [user_dades] = await pool.query(
      "select * from usuari where nom = ? ",
      [user]
    );
    if (user_dades.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const user_id = user_dades[0].id; 

    const [result] = await pool.query(
      `insert into tasques (dades,user_id) VALUES(?,?)`,
      [dades, user_id]
    );

    res.status(201).json({
      // devolvemos los datos de la tarea creada
        tasca: {
            id:         result[0].id_tasca,
            user:       result[0].user_id ,
            dades:      result[0].dades  ,
            creat_date: result[0].creat_date , 
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }

  //return res.json({ RESPUESTA: `llegaste al endpoint, ${user}`  });
});

module.exports = router;