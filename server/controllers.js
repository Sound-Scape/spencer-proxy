const axios = require('axios');

const waveformPlayer = function(req, res) {
  axios(`http://18.219.124.16/api/waveformplayer/${req.params.id}`)
  .then(function(response) {
   res.send(response.data)
  })  
  .catch(function(error) {
    console.log(error);
  })
}

const comments = function(req, res) {
  axios.get(`http://localhost:3001/api/${req.params.songid}`)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = {
  waveformPlayer,
  comments,
};



