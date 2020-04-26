const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
 res.send('<H1>INDEX</H1><a href = "/search">search</a>')
});

// set up author routes
const searchRouter = require('./routes/itemSearchRouter');

// Handle search requests
// the search routes are added onto the end of '/search'
app.use('/search', searchRouter);

app.listen(PORT, () => {
 console.log('This app is listening on port ${PORT}!')
});