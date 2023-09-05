const express = require("express");
const router = express.Router();
const Book = require("../models/book.js");

// New book
router.post("/new", async (req, res) => {
  try {
    const { name, author, publisher } = req.body;
    if (!name || !author || !publisher) {
      return res.status(400).json({ error: "Incomplete book data" });
    }

    const newBook = new Book({ name, author, publisher });
    await newBook.save();
    res.status(201).json({ message: "Book added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Search book by name
router.post("/search", async (req, res) => {
  try {
    const { name } = req.body;
    const regex = new RegExp(name, "i");
    const books = await Book.find({ name: { $regex: regex } });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get specific book
router.post("/get", async (req, res) => {
  try {
    const { id } = req.body;
    const bookData = await Book.findById(id);

    if (!bookData) {
      return res.status(500).json({ error: "Internal server error" });
    }

    bookData.clicks = bookData.clicks + 1;
    await bookData.save();

    res.json(bookData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all books
router.get("/all", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get trending books
router.get("/trending", async (req, res) => {
  try {
    const mostClickedBooks = await Book.find().sort({ clicks: -1 }).limit(4);
    res.send(mostClickedBooks);
  } catch (error) {
    res.send(error);
  }
});

// Delete a book by ID
router.post("/delete", async (req, res) => {
  try {
    const idsToDelete = req.body.data; // Assuming you are passing an array of IDs as 'ids' in the request body
    // Check if the Book with the provided IDs exist
    for (const id of idsToDelete) {
      const bookToDelete = await Book.findById(id);
      if (!bookToDelete) {
        return res.status(404).send({
          data: `Book with ID ${id} not found`,
        });
      }
      await bookToDelete.deleteOne();
    }
    res.send({
      data: "Book deleted successfully",
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      data: "Internal server error",
    });
  }
});

module.exports = router;
