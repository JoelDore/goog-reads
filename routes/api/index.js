const router = require('express').Router();
const bookRoutes = require('./books')

// routes for Book collection
router.use('/books', bookRoutes)

module.exports = router