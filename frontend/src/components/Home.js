import React from 'react';
import SpotCard from './SpotCard';

function Home({ spots }) {
  return (
    <div className="home">
      {spots.map(spot => (
        <SpotCard key={spot.spotName} spot={spot} />
      ))}
    </div>
  );
}

export default Home;
