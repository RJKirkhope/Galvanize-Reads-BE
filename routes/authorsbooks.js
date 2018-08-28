const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.listAuthors('authors').then(authors => {
        response.json({authors});
    }).catch(next);
});

module.exports = router;