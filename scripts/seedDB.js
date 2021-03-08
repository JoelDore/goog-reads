const db = require('../models/')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googreads', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const bookSeed = [
    {
        title: "Test Book",
        authors: ["Me", "You"],
        description: "This is a test book",
        image: "https://www.google.com",
        link: "https://www.google.com"
    },
]

db.Book.remove({})
    .then(() => db.Book.insertMany(bookSeed))
    .then(data => {
        console.log(`\n     ${data.length} record${data.length !== 1 ? "s" : ""} inserted!`)
        process.exit(0)
    })
    .catch(err => {
        console.error(err)
        process.exit(1)
    })