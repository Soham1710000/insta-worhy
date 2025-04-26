const express = require('express');
const cors = require('cors');
const spots = require('./data/spots.json');

const app = express();
app.use(cors());

app.get('/api/spots', (req, res) => {
  const { country } = req.query;
  if (country) {
    const filtered = spots.filter(spot => spot.country.toLowerCase() === country.toLowerCase());
    res.json(filtered);
  } else {
    res.json(spots);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
