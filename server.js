const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
require('dotenv').config();
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('Starting point');
});

app.listen(PORT, () => console.log('Server is listening on port ' + PORT));
