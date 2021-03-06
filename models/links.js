const mongoose = require('mongoose');

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