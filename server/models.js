const mongoose = require('mongoose');


const toDoSchema = new Schema ({
    title: String,
    priority: Number
});

const ToDo = mongoose.model('ToDo', toDoSchema);

await mongoose.connect('mongodb://127.0.0.1/simpletodos');

module.exports = mongoose;