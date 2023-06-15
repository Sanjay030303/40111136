import React, { useState, useEffect } from 'react';

function App() {
  const [trainDetails, setTrainDetails] = useState(null);

  useEffect(() => {
    fetchTrainDetails();
  }, []);

  const fetchTrainDetails = async () => {
    try {
      const response = await fetch('http://localhost:5000/train/trains/2344');
      const data = await response.json();
      setTrainDetails(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <h1>Train Details</h1>
      {trainDetails ? (
        <div>
          <h2>{trainDetails.trainName}</h2>
          <p>Train Number: {trainDetails.trainNumber}</p>
          <p>Departure Time: {trainDetails.departureTime.Hours}:{trainDetails.departureTime.Minutes}</p>
          <p>Seats Available:</p>
          <ul>
            <li>Sleeper: {trainDetails.seatsAvailable.sleeper}</li>
            <li>AC: {trainDetails.seatsAvailable.AC}</li>
          </ul>
          <p>Price:</p>
          <ul>
            <li>Sleeper: {trainDetails.price.sleeper}</li>
            <li>AC: {trainDetails.price.AC}</li>
          </ul>
          <p>Delayed By: {trainDetails.delayedBy} minutes</p>
        </div>
      ) : (
        <p>Loading train details...</p>
      )}
    </div>
  );
}

export default App;
