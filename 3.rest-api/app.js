const express = require("express");
const app = express();
const port = 3000;

// middleware
app.use(express.json());

let books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
];

app.get("/", (req, res) => {
  res.json({ message: "Welcome to our Library" });
});

//get all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/book/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((bk) => bk.id === bookId);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found, Use a different ID" });
  }
});

// add new book
app.post("/api/book", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(newBook);
  res.status(201).json("New book registered successfully!");
});

// update a book
app.put("/api/book/:id", (req, res) => {
  const findBook = books.find((item) => item.id === parseInt(req.params.id));
  if (findBook) {
    findBook.title = req.body.title || findBook.title;
    findBook.author = req.body.author || findBook.author;
    res
      .status(200)
      .json({ message: "Book updated successfully", data: findBook });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

// delete a book
app.delete("/api/book/:id", (req, res) => {
  const findBook = books.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (findBook !== -1) {
    const deletedBook = books.splice(findBook, 1);
    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

app.listen(port, () => {
  console.log("Server listening on Port: ", port);
});
