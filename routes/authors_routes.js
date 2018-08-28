const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list('authors').then(authors => {
        response.json({authors});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read('authors', request.params.id).then(authors => {
        authors
            ? response.json({authors})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create('authors', request.body).then(newPost => {
        response.status(201).json({newPost});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update('authors', request.params.id, request.body).then(newUpdate => {
        response.json({newUpdate: newUpdate[0]});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete('authors', request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

module.exports = router;