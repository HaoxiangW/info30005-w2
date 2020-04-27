const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const itemsSchema = new Schema({
	_id: String,
	Barcode: String,
	Name: String,
	Material: Array,
	Description: String,
},{collection: 'Items'});
const items = mongoose.model("items", itemsSchema);

module.exports = items;