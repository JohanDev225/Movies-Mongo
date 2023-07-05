import {Router} from 'express';
import * as Movie from '../controllers/Movie.Controller.js';
import {verifyToken} from '../middlewares/Auth.js';

const router = Router();

//routes para peliculas
router.get('/movies', Movie.getMovies);
router.get('/movie/:id', verifyToken, Movie.getMovie);
router.post('/create-movie', verifyToken, Movie.createMovie);
router.put('/update-movie/:id', verifyToken, Movie.updateMovieById);
router.delete('/delete-movie/:id', verifyToken, Movie.deleteMovieById);


export default router;