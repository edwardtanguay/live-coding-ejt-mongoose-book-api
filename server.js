import express from 'express';
import mongoose from 'mongoose';
import { Book } from './models/Book.js';

mongoose.connect('mongodb://localhost/bookapi');

const app = express();
const port = 3459;

app.use(express.json());

app.get('/', (req, res) => {
	res.send(`<h1>Book API</h1>`);
});

app.post('/book', async (req, res) => {
	const book = new Book(req.body);
	await book.save();
	res.status(200).json({
		"message": "book created",
		book
	});
});

app.listen(port, () => {
	console.log(`listening on port: http://localhost:${port}`);
});