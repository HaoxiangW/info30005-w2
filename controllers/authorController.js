// provide the controller a link to the author model
var authors = require('../models/author');
// Function to handle a request to get all authors
const getAllAuthors = (req, res) => {
	output = '<H1>Library System</H1><body>Author id list<br>'
	authorid = authors.id
	var i;
	for (i = 0; i < authorid; i++) { 
		output += '<a href = "/${authorid[i]}">${authorid[i]}</a>' + "<br>";
	}
	output += '</body>'
	res.send(authors.id); // return the list of authors
};

// Function to handle a request to a particular author
const getAuthorByID = (req, res) => {
// search for author in the database via ID
const author = authors.find(author => author.id === req.params.id);
if (author){
res.send(author); // send back the author details
}
else{
// you can decide what to return if author is not found
// currently, an empty list will be return.
res.send([]);
}
};

// Remember to export the callbacks
module.exports = {
 getAllAuthors,
 getAuthorByID,
};