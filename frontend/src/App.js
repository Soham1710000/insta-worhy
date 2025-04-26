import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Home from './components/Home';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://your-backend-url.onrender.com/api/spots')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div className="App">
      <Home spots={data} />
    </div>
  );
}

export default App;
