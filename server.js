const express = require('express');
const mongoose = require('mongoose')
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const routes = require('./routes')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
}

// Add API and view routes
app.use(routes)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googreads', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});