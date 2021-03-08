const router = require('express').Router();
const axios = require('axios')

// route for '/api/googlebooks'
router.route('/')
    .get((req, res) => {
        let url = `https://www.googleapis.com/books/v1/volumes`
        url += `?key=${process.env.GOOGLE_BOOKS_KEY}`
        url += `&q=${req.query.q}`
        url += `&startIndex=${req.query.startIndex}`

        axios.get(url)
            .then(data => res.json(data.data))
            .catch(err => res.status(422).json(err))
    })

module.exports = router