require("../models/db.js");
const mongoose = require("mongoose");

// import items model
const Item = mongoose.model('items');

    
// function to handle a request to get all items
const getAllItems = async (req, res) => {
	try {
		const all_items = await Item.find();
		return res.send(all_items);
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};


// function to get item by id
const getItem = async (req, res) => {
	var id = req.params.id.toString();
	console.log("open item page for id:" + id);
	try {
		item = await Item.find(mongoose.Types.ObjectId(id));
		if(item.length){
			return res.send(item[0]);
		} else {
			res.status(400);
			return res.send("Page Not Found");
		}
		
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};

//export the functions
module.exports = {
  getItem,
  getAllItems
};