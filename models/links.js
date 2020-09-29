const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    link: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('links', userSchema);