const express = require('express');
const router = express.Router();
const spots = require('../models/spotModel');

// Example spots data (Replace with real data or a database connection)
const spotData = [
  {
    "country": "UAE",
    "city": "Dubai",
    "spotName": "Burj Khalifa",
    "location": "Downtown Dubai",
    "description": "Tallest building in the world with stunning cityscape views.",
    "imageUrl": "https://images.unsplash.com/photo-1606402179626-22a32c2f7e65",
    "samplePhotoIdea": "Capture reflection from Dubai Fountain during sunset.",
    "bestTimeToVisit": "Sunset",
    "hashtags": ["#BurjKhalifa", "#DubaiViews", "#SunsetShots"],
    "bookTourLink": "https://www.headout.com/dubai/burj-khalifa-tickets"
  },
  // Add other spots here...
];

router.get('/', (req, res) => {
  res.json(spotData);
});

module.exports = router;
