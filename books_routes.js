const express = require('express');
const router = express.Router();

const queries = require('./queries');

router.get("/", (request, response, next) => {
    queries.list('books').then(books => {
        response.json({books});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read("books", request.params.id).then(books => {
        book
            ? response.json({books})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create("books", request.body).then(books => {
        response.status(201).json({books});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete("books", request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update("books", request.params.id, request.body).then(books => {
        response.json({book: book[0]});
    }).catch(next);
});

module.exports = router;