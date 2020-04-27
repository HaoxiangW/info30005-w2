require("../models/db.js");
const mongoose = require("mongoose");

// import author model
const Item = mongoose.model('items');

    
// function to handle a request to get all authors
const getAllItems = async (req, res) => {
	try {
		const all_items = await Item.find();
		return res.send(all_items);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};


// function to get author by id
const getItem = async (req, res) => {
	var name = req.params.name.toString();
	console.log("open item page for " + name);;
	var query = {Name:name}
	try {
		item = await Item.find(query);
		if(item.length){
			return res.send(item);
		} else {
			res.status(400);
			return res.send("Page Not Found");
		}
		
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};

// remember to export the functions
module.exports = {
  getItem,
  getAllItems
};