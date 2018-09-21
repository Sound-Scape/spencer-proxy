const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('dev'));
app.use('/songs/:songid',express.static(path.join(__dirname, 'public')));

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

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});