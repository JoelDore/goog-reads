const router = require('express').Router();
const bookRoutes = require('./books')
const googleRoutes = require('./google-api')

// routes for Book collection
router.use('/books', bookRoutes)

// routes for GoogleBooks API
router.use('/googlebooks', googleRoutes)

module.exports = router