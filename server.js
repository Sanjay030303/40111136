const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('http://104.211.219.98/train/trains/2344', (req, res) => {
  const trainNumber = req.params.trainNumber;
  const trainDetails = {
    trainName: 'Chai Wala Exp',
    trainNumber: trainNumber,
    departureTime: { Hours: 11, Minutes: 0, Seconds: 0 },
    seatsAvailable: { sleeper: 33, AC: 13 },
    price: { sleeper: 613, AC: 724 },
    delayedBy: 4
  };
          
  res.json(trainDetails);
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
