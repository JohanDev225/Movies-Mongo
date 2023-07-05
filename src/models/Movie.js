import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
    title: String,
    year: Number,
    cover: String,
    description: String,
    duration: Number,
    takings: String,
});

export default model('Movie', movieSchema);