const mongoose = require('mongoose');
const lc_schema = new mongoose.Schema({
    link: { type: String, required: true },
    tags: { type: [String], required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, {
    collection: 'Leetcode',
});

module.exports = mongoose.model("LcSchema", lc_schema);