const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000;

// set up author routes
const searchRouter = require('./routes/searchRouter');

app.get('/', (req, res) => {
 res.send('<H1>INDEX</H1><a href = "/search">search</a>')
});

// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/search', searchRouter);

app.listen(PORT, () => {
 console.log('This app is listening on port ${PORT}!')
});