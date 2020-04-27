require("../models/db.js");
const mongoose = require("mongoose");

// import author model
const Item = mongoose.model('items');
  
// find items that contains the searched term or has the same barcode as the searched barcode
const findItem = async (req, res) => {
	var name = req.query.name.toLowerCase();
	console.log("search for " + name);
	var query = {Name:name}
	try {
		item = await Item.find(query);
		if(item.length){
			return res.send("Result Found:<br><a href='/item/" + name + "'>" + name + "</a>");
		} else {
			res.status(400);
			return res.send("No result found <a href='/search'>click here</a> to return to the search page");
		}
		
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};
// remember to export the functions
module.exports = {
  findItem
};