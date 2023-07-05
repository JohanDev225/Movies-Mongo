import express from 'express';

const app = express();

//Importar las rutas
import Auth from './routes/User.Routes.js';
import Movie from './routes/Movie.Routes.js';
//Importar Middlewares

//Global Settings
//Vas a permitir que el servidor reciba json
app.use(express.json());

// No vas a permitir que el servidor reciba json anidados
app.use(express.urlencoded({extended: false}));

//Vas a permitir que el servidor reciba archivos
app.use(express.static('public'));

app.use(Auth)
app.use(Movie)


export default app;