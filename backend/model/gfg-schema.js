const mongoose = require('mongoose');
const gfg_schema = new mongoose.Schema({
    link: { type: String, required: true },
    tags: { type: [String], required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
},{
    collection: 'GFG'
});

module.exports = mongoose.model("gfg-schema",gfg_schema);