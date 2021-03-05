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

    },

    create: (req, res) => {

    },

    delete: (req, res) => {

    }
}