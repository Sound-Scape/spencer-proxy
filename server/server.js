const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes.js')


app.use(morgan('dev'));
app.use('/songs/:songid',express.static(path.join(__dirname, '../public')));
app.use(`/api`, routes);

app.get('/comments/:songid', (req, res) => {
  // console.log(`http:/localhost:3001/api/${req.params.songid}`);
  axios.get(`http://localhost:3001/api/${req.params.songid}`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/api/stats/:id', (req, res) =>{
  axios.get(`http://localhost:3004/api/stats/${req.params.id}`)
  .then(({ data }) => {
    res.json(data);
  })
  .catch((error) => {
    console.log(error);
  })
})

app.get('/relatedTracks/:id', (req, res) => {
  // res.send(req.params.id)
  const songId = req.params.id;
  axios.get(`http://localhost:3002/relatedTracks/${songId}`)
    .then(({ data }) => {
      console.log('Related Tracks', data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
 });
 
 app.get('/relatedAlbums/:id', (req, res) => {
  const songId = req.params.id;
  axios.get(`http://localhost:3002/relatedAlbums/${songId}`)
    .then(({ data }) => {
      console.log('Related Albums', data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
 });

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});