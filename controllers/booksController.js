const db = require('../models/')

module.exports = {
    findAll: (req, res) => {
        db.Book
            .find({})
            .sort({ title: "asc" })
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err))
    },

    findById: (req, res) => {
        db.Book
            .findById(req.params.id)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err))
    },

    create: (req, res) => {
        db.Book
            .create(req.body)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err))
    },

    delete: (req, res) => {
        db.Book
            .findByIdAndDelete(req.params.id)
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err))
    }
}