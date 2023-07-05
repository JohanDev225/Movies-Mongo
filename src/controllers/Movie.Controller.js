import Movie from "../models/Movie.js";

export const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        //Validar que la pelicula exista
        if (!Movie.findById(id)) return res.status(404).json({ message: "Movie not found" });
        // Buscar la pelicula en la base de datos en mongo
        const movie = await Movie.findOne({ _id: id });
        res.json(movie);
    } catch (error) {
        console.log(error);
    }

}

export const getMovies = async (req, res) => {
    try {
        const movie = await Movie.find();
        res.json(movie);
    } catch (error) {
        console.log(error);
    }

}

export const createMovie = async (req, res) => {
    try {
        const { title, year, cover, description, duration, contentRating, source, tags } = req.body;

        const newMovie = new Movie({
            title,
            year,
            cover,
            description,
            duration,
            contentRating,
            source,
            tags
        });

        //Guardar la pelicula en la base de datos
        const saveMovie= await newMovie.save();
        //Responder al cliente
        res.status(201).json(saveMovie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, year, cover, description, duration, contentRating, source, tags } = req.body;
        //Validar que la pelicula exista
        if (!Movie.findById(id)) return res.status(404).json({ message: "Movie not found" });

        const updatedMovie = new Movie({
            _id: id,
            title,
            year,
            cover,
            description,
            duration,
            contentRating,
            source,
            tags
        });
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        //Validar que la pelicula exista
        if (!Movie.findById(id)) return res.status(404).json({ message: "Movie not found" });

        await Movie.findByIdAndDelete(id);
        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}