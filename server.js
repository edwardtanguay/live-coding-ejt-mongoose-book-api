import express from 'express';
import mongoose from 'mongoose';
import { Book } from './models/Book.js';

mongoose.connect('mongodb://localhost/bookapi');

const app = express();
const port = 3459;

app.get('/', (req, res) => {
	res.send(`<h1>Book API</h1>`);
});

app.post('/book', async (req, res) => {
	const book = new Book({
		title: 'ttt',
		description: 'ddd',
		numberOfPages: 999
	});
	await book.save();
	res.status(200).json({
		"message": "book created"
	});
});

app.listen(port, () => {
	console.log(`listening on port: http://localhost:${port}`);
});