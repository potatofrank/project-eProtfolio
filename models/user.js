const mongoose = require('mongoose');
//define the schema for oue user model
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

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
    phone_num: {
        type: String,
    },

    profile_img: {

        type: String,
    },
    summary: {
        type: String,
    },
    tag: [
        {
            type: ObjectId,
            ref: "Tag",
        },
    ],
    followed_tag: [
        {
            type: ObjectId,
            ref: "Tag",
        },
    ],
    password: {
        type: String,
        required: true,
    },
    date_of_birth: {
        type: Date,
    },
    popularity: {
        type: Number,
    },
    infoDisplayConsent: {
        type: Boolean,
    },
    emailConsent: {
        type: Boolean,
    },
    isAdmin: {
        type: Boolean,
    },
});

module.exports = mongoose.model('users', userSchema);