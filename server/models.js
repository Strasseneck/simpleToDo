const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema ({
    title: String,
    priority: Number
});

const ToDo = mongoose.model('ToDo', toDoSchema);

const connection = mongoose.connect('mongodb://127.0.0.1/simpletodos');

module.exports = { connection, ToDo};