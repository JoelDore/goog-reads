const router = require('express').Router();
const apiRoutes = require('./api')
const path = require('path')

// API routes
router.use('/api', apiRoutes)

// Get react app for any other route
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router