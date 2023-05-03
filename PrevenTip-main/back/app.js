const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();

app.use(bodyParser.json());

// MYSQL 
const connection = mysql.createConnection({
    host:"3.14.73.75",
    user:"monstruito",
    password:"montalvoinc",
    database:"proyecto_salud",
    connectionLimit:10,
    ssl: {
         rejectUnauthorized:false
    }
});

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Route
app.get('/', (req, res) => {
    res.send("Welcome")
});

/* ----------------------CATEGORIAS-------------------- */

/*
app.get('/dashboard', (req, res) => {
    const sql = 'SELECT * FROM vitales';
    connection.query(sql, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.json({message: 'No hay resultados'});
        }
    });
});
*/

/*
app.get('/dashboard/:idCategoria', (req, res) => {
    const { idCategoria } = req.params;
    const sql = `SELECT * FROM vitales WHERE id_lectura = ${idCategoria}`;
    connection.query(sql, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.json({message: 'No hay resultados'});
        }
    });
});
*/

// Crea la ruta que recibe solicitudes de un usuario específico
// Crea la ruta que recibe solicitudes de un usuario específico
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const query = `SELECT * FROM vitales WHERE id_cliente = ${userId}`;
  
    connection.query(query, (error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
        return;
      }
  
      if (results.length === 0) {
        res.status(404).send('Usuario no encontrado');
        return;
      }
  
      res.status(200).json(results[0]);
    });
  });








//CHECK connect 
connection.connect((error) => {
    if (error) {
        console.error('Error de conexión',error);
        throw error;
    }
    console.log("Conexión exitosa.")
});

app.listen(PORT, () => {
    console.log(`Server running on port  ${PORT}`);
});
