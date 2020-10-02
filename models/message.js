const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },

    family_name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    phoneNumber: {
        type: Number,
        required: true,
    },

    message: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('messages', userSchema);