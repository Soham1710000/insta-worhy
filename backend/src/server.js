const express = require('express');
const cors = require('cors');
require('dotenv').config();
const spotRoutes = require('./routes/spotRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Instagrammable Spots API!');
});

app.use('/api/spots', spotRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
