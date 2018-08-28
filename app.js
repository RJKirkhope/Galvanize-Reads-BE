const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();

const books = require("./route/books");
const authors = require("./routes/authors")

app.use(bodyParser.json());
app.use(cors())

app.use("/books", books);
app.use("/authors", authors)

// catch 404 and forward to error handler
app.use((request, response, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
app.use((err, request, response, next) => {
    response.status(err.status || 500);
    response.json({
      message: err.message,
      error: request.app.get("env") === "development" ? err.stack : {}
    });
});

module.exports = app;