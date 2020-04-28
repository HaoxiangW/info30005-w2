require("../models/db.js");
const mongoose = require("mongoose");

// import item model
const Item = mongoose.model('items');
  
// find items that contains the searched term
const findItem = async (req, res) => {
	var name = req.query.name.toLowerCase();
	console.log("search for " + name);
	var query = {Name:{$regex: name}}
	try {
		item = await Item.find(query);
		result = "Result Found:"
		if(item.length){
			for(var i = 0; i < item.length; i++){
				result = result + "<br><a href='/item/" + item[i]._id + "'>" + item[i].Name + "</a>";
			}
		} else {
			result = result + "<br>No result found!"
		}
		result += "<br><br><a href='/search'>click here</a> to return to the search page"
		return res.send(result);
		
	} catch (err) {
		res.status(400);
		return res.send("Database query failed");
	}
};
// export the functions
module.exports = {
  findItem
};