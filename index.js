const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const places = require('./data/places.json');
const hotels = require('./data/hotels.json');

app.get('/', (req, res) => {
  res.send('Travel Guru server is running')
});

app.get('/places', (req, res) => {
  res.send(places);
});

app.get('/places/:name', (req, res) => {
  const name = req.params.name;
  const placeName = places.find(place => place.name === name);
  res.send(placeName);
});

app.get('/hotels', (req, res) => {
  res.send(hotels);
});

app.get('/hotels/:place', (req, res) => {
  const singlePlace = req.params.place;
  const hotelsInPlace = hotels.filter(hotel => hotel.place === singlePlace);
  res.send(hotelsInPlace);
});

app.listen(port, () => {
  console.log(`Travel Guru server is running on port: ${port}`)
});