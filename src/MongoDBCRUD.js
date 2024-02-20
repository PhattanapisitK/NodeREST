// Description: REST API with MongoDB
// npm install express mongoose body-parser
// Run this file with node MongoDBREST.js
// Test with Postman

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Database connection
mongoose.connect(
    "mongodb://",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const Book = mongoose.model("Book", {
    id: {
        type: Number,
        unique: true, // Ensures uniqueness of the "id" field
        required: true, // If you want "id" to be required
    },
    title: String,
    uthor: String,
});

const app = express();
app.use(bodyParser.json());

// Create
app.post("/books", async (req, res) => {
    try {
        // Get the las book record to determine the next ID
        const lastBook = await Book.fineOne().sort({ id: -1 });
        const nextId = lastBook ? lastBook.id + 1 : 1;

        // Create a new book with the next ID
        const book = new Book({
            id: nextId, // Set the custom "id" field
            ...req.body, // Include other book data from the request body
        });

        await book.save();
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/books", async (req, res) => {
    try {
        // Get the las book record to determine the next ID
        const books = await Book.fineOne().sort({ id: -1 });
        const nextId = lastBook ? lastBook.id + 1 : 1;

        // Create a new book with the next ID
        const book = new Book({
            id: nextId, // Set the custom "id" field
            ...req.body, // Include other book data from the request body
        });

        await book.save();
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});