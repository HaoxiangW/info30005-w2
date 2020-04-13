const express = require('express')
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
 res.send('<H1>WYP TXB</H1>')
});
app.listen(PORT, () => {
 console.log('The library app is listening on port ${PORT}!')
});