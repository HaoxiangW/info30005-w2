const mongoose = require("mongoose");

// import author model
const Item = mongoose.model("item");

    
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
  
// function to modify author by ID
const updateItem = async (req, res) => {
  res.send("Working on this feature");
};

// function to add author
const addItem = async (req, res) => {
 res.send("Working on this feature");
};

// function to get author by id
const getItemByName = (req, res) => {
  res.send("Working on this feature");
};

// function to get author by id
const getItemByBarcode = (req, res) => {
  res.send("Working on this feature");
};

// remember to export the functions
module.exports = {
  getAllItems,
  getItemByName,
  getItemByBarcode
  updateItem,
  addItem
};