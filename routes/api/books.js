const router = require('express').Router();
const booksController = require('../../controllers/booksController')

// route for '/api/books/'
router.route('/')
    .get(booksController.findAll)
    .post(booksController.create)

// route for '/api/books/:id'
router.route('/:id')
    .delete(booksController.delete)

module.exports = router