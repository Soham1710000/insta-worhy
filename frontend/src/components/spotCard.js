import React from 'react';

function SpotCard({ spot }) {
  return (
    <div className="spot-card">
      <img src={spot.imageUrl} alt={spot.spotName} />
      <h3>{spot.spotName}</h3>
      <p>{spot.description}</p>
      <p>Best time to visit: {spot.bestTimeToVisit}</p>
      <p>Hashtags: {spot.hashtags.join(', ')}</p>
      <a href={spot.bookTourLink} target="_blank" rel="noopener noreferrer">Book a tour</a>
    </div>
  );
}

export default SpotCard;
