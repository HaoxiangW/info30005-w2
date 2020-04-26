
// function to handle a request to get all authors
const getAllItems = async (req, res) => {
    
  res.send("<Head>HELLOWORLD</head>")
};
    
  
  
// function to modify author by ID
const updateAuthor = async (req, res) => {
  res.send("Working on this feature");
};

// function to add author
const addAuthor = async (req, res) => {
 res.send("Working on this feature");
};

// function to get author by id
const getAuthorByID = (req, res) => {
  res.send("Working on this feature");
};

// remember to export the functions
module.exports = {
  getAllAuthors,
  getAuthorByID,
  addAuthor,
  updateAuthor
};