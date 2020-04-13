const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000;

// set up author routes
const authorRouter = require('./routes/authorRouter');

app.get('/', (req, res) => {
 res.send('<H1>Library System</H1><a href = "/author-management">author</a>')
});

// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/author-management', authorRouter);

app.listen(PORT, () => {
 console.log('The library app is listening on port ${PORT}!')
});