const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const sheetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    musicSheet: { type: String, required: true }
});

module.exports = mongoose.model('sheets', sheetSchema);