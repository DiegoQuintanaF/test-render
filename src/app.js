const express = require('express')
const config = require('./config/config')
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Inicializamos el servidor
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
//Static files
app.use(express.static(path.join(__dirname, 'public')));
//Middlewares
app.use(express.urlencoded({extended: true}));

//ajustes
app.set('port', config.port)

//Routes
app.use(require('./api/index'));

//Server is listenning
app.listen(app.get('port'), () =>{
    console.log(`Server on http://localhost:${app.get('port')}`)
})


