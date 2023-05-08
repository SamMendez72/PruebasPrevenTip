const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser'); //Nos sirve para acceder al cuerpo de las solicitudes (i.e. tipo json)
const PORT = process.env.PORT || 3050; //En este uerto correrá el backend
const app = express();

app.use(bodyParser.json());

// MYSQL 
// ----------------------------
// CONEXIÓN A LA BASE DE DATOS
// ----------------------------
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
// Necesario para tener los permissos requeridos para consumir las apis
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Permitimos todo tipo de solicitudes
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//-------------------------------------
// Rutas y peticiones a la base de datos
//-------------------------------------

// Ruta para saber que el backend está arriba
app.get('/', (req, res) => {
    res.send("¡¡El backend está funcionando!!")
});

// APIS REST
app.get('/users', (req, res) => {
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

// API que devuelve el registro de los vitales más reciente de un usuario específico
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    const query = `SELECT ritmo_cardiaco, frecuencia_respiratoria, peso, indice_masa_corporal, saturacion_oxigeno, temperatura, presion_sanguinea_sistolica, altura FROM vitales WHERE id_cliente = ${userId} ORDER BY date_time DESC LIMIT 1`;
  
    connection.query(query, (error, results, fields) => {
      //console.log(results);
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


// API que devuelve todos los registros de vitales de un cleinte específico
app.get('/users/todo/:userId', (req, res) => {
    const userId = req.params.userId;
    const query = `SELECT date_time, ritmo_cardiaco, frecuencia_respiratoria, peso, indice_masa_corporal, saturacion_oxigeno, temperatura, presion_sanguinea_sistolica, altura FROM vitales WHERE id_cliente = ${userId} ORDER BY date_time DESC`;
  
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
  
      res.status(200).json(results);
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
