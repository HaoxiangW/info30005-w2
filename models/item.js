const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
id: String,
barcode: String,
name: String,
description: String,
});
const item = mongoose.model("item", itemSchema, "item");

module.exports = item;