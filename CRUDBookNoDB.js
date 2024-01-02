// Description: CRUD BOok No DB
// npm install express
// Run  this file with node CRUDBookNoDB.js
// Test with Postman
require("dotenv").config();
const express = require('express');
const app = express();

// parse incoming requests
app.use(express.json());

// sample data
let books = [
    {
        id: 1,
        title: 'Book 1',
        author: 'Author 1'
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'Author 2'
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'Author 3'
    }
];

// route to get all books
<<<<<<< HEAD
app.get('/books', (req, res) => {
=======
app.get('/books', (reg, res) => {
>>>>>>> d83d99de10ad1ab1124871739b5ea40a5430f222
    res.json(books);
});

// route to get a book by id
<<<<<<< HEAD
app.get('/books/:id', (req, res) => {
=======
app.get('/books:id', (req, res) => {
>>>>>>> d83d99de10ad1ab1124871739b5ea40a5430f222
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    res.json(book);
});

// route to create a new book
app.post('/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.send(book);
});

// route to update a book
<<<<<<< HEAD
app.put('/books/:id', (req, res) => {
=======
app.put('/books:id', (req, res) => {
>>>>>>> d83d99de10ad1ab1124871739b5ea40a5430f222
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    book.title = req.body.title;
    book.author = req.body.author;
    res.send(book);
});

// route to update a book
<<<<<<< HEAD
app.delete('/books/:id', (req, res) => {
=======
app.delete('/books:id', (req, res) => {
>>>>>>> d83d99de10ad1ab1124871739b5ea40a5430f222
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    const index = books.indexOf(book);
    book.splice(index, 1);
    res.send(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
